import { Component } from "react";
import NfCarouselImage from "./NfCarouselImage";
import { urlAPI } from "./constants";
import { Spinner } from "react-bootstrap";

class NfCarouselItem extends Component {
    state = {
        arrayOfMovies: [],
        totalResults: "0",
        search: this.props.search,
        loading: true,
    };

    getData() {
        // console.log("getData online");

        const searchString = this.state.search;
        const searchUrl = urlAPI + searchString;

        // in questa fetch recupererò 3 pagine in maniera tale da avere 30 film a disposizione su cui fare il ciclo

        fetch(searchUrl)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error(res.status);
                }
            })
            .then((data) => {
                // console.log(data);
                this.setState({
                    arrayOfMovies: data.Search ?? [],
                    totalResults: data.totalResults,
                });

                fetch(searchUrl + "&page=2")
                    .then((res) => {
                        if (res.ok) {
                            return res.json();
                        } else {
                            throw new Error(res.status);
                        }
                    })
                    .then((data) => {
                        // console.log(data);
                        this.setState((prev) => ({
                            arrayOfMovies: [
                                ...(prev.arrayOfMovies ?? []),
                                ...(data.Search ?? []),
                            ],
                            totalResults: data.totalResults,
                            // ho messo il loading alla generazione del secondo array perché mi sembrava
                            // visivamente più interessante
                            loading: false,
                        }));
                        fetch(searchUrl + "&page=3")
                            .then((res) => {
                                if (res.ok) {
                                    return res.json();
                                } else {
                                    throw new Error(res.status);
                                }
                            })
                            .then((data) => {
                                // console.log(data);
                                this.setState((prev) => ({
                                    arrayOfMovies: [
                                        ...(prev.arrayOfMovies ?? []),
                                        ...(data.Search ?? []),
                                    ],
                                    totalResults: data.totalResults,
                                }));
                            })
                            .catch((er) => {
                                console.log("catch: " + er);
                                alert("Errore rilevato: " + er);
                                this.setState({
                                    loading: false,
                                });
                            });
                    })
                    .catch((er) => {
                        console.log("catch: " + er);
                        alert("Errore rilevato: " + er);
                        this.setState({
                            loading: false,
                        });
                    });
            })
            .catch((er) => {
                console.log("catch: " + er);
                alert("Errore rilevato: " + er);
                this.setState({
                    loading: false,
                });
            });
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <>
                {this.state.loading === true && (
                    <Spinner animation="grow" variant="info" />
                )}{" "}
                {this.state.arrayOfMovies.length === 0 && (
                    <p className="text-center text-white">no results</p>
                )}
                {Array.isArray(this.state.arrayOfMovies) &&
                    this.state.arrayOfMovies.length > 0 &&
                    (this.props.position === 1 ||
                        (this.props.position === 2 &&
                            Number(this.state.totalResults) > 6) ||
                        (this.props.position === 3 &&
                            Number(this.state.totalResults) > 12)) && (
                        <div className={"carousel-item " + this.props.active}>
                            <div className="row g-1 flex-nowrap mx-0">
                                {this.props.position === 1 &&
                                    this.state.arrayOfMovies
                                        .filter(
                                            (movie, index, arr) =>
                                                index ===
                                                arr.findIndex(
                                                    (x) =>
                                                        x.imdbID ===
                                                        movie.imdbID,
                                                ),
                                        )
                                        .slice(0, 6)
                                        .map((movie) => {
                                            return (
                                                <NfCarouselImage
                                                    key={movie.imdbID}
                                                    title={movie.Title}
                                                    year={movie.Year}
                                                    src={movie.Poster}
                                                />
                                            );
                                        })}

                                {Number(this.state.totalResults) >= 12 &&
                                    this.props.position === 2 &&
                                    this.state.arrayOfMovies
                                        .filter(
                                            (movie, index, arr) =>
                                                index ===
                                                arr.findIndex(
                                                    (x) =>
                                                        x.imdbID ===
                                                        movie.imdbID,
                                                ),
                                        )
                                        .slice(6, 12)
                                        .map((movie) => {
                                            return (
                                                <NfCarouselImage
                                                    key={movie.imdbID}
                                                    title={movie.Title}
                                                    year={movie.Year}
                                                    src={movie.Poster}
                                                />
                                            );
                                        })}

                                {Number(this.state.totalResults) >= 18 &&
                                    this.props.position === 3 &&
                                    this.state.arrayOfMovies
                                        .filter(
                                            (movie, index, arr) =>
                                                index ===
                                                arr.findIndex(
                                                    (x) =>
                                                        x.imdbID ===
                                                        movie.imdbID,
                                                ),
                                        )
                                        .slice(12, 18)
                                        .map((movie) => {
                                            return (
                                                <NfCarouselImage
                                                    key={movie.imdbID}
                                                    title={movie.Title}
                                                    year={movie.Year}
                                                    src={movie.Poster}
                                                />
                                            );
                                        })}
                            </div>
                        </div>
                    )}
            </>
        );
    }
}
export default NfCarouselItem;
