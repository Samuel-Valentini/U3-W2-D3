import { useParams } from "react-router-dom";
import { plotFull, urlAPIid } from "./constants";
import { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Spinner } from "react-bootstrap";

const MovieDetails = () => {
    const id = useParams().id;
    const [movieData, setMovieData] = useState(null);

    console.log(movieData);

    const getDataId = () => {
        fetch(urlAPIid + id + plotFull)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("problema nel primo .then");
                }
            })
            .then((data) => {
                setMovieData(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getDataId();
    }, []);

    return (
        <>
            {movieData ? (
                <>
                    <Card className="bg-dark text-light">
                        <Card.Img
                            variant="top"
                            src={movieData.Poster}
                            style={{ width: "18rem" }}
                            className="mx-auto mt-3"
                        />
                        <Card.Body>
                            <Card.Title className="text-center">
                                {movieData.Title}
                            </Card.Title>
                            <Card.Text>{movieData.Plot}</Card.Text>
                            <Card.Text className="fw-bold">
                                Awards: {movieData.Actors}
                            </Card.Text>
                            <Card.Text className="fw-bold">
                                BoxOffice: {movieData.BoxOffice}
                            </Card.Text>
                            <Card.Text className="fw-bold">
                                Country: {movieData.Country}
                            </Card.Text>
                            <Card.Text className="fw-bold">
                                Director: {movieData.Director}
                            </Card.Text>
                            <Card.Text className="fw-bold">
                                Genre: {movieData.Genre}
                            </Card.Text>
                            <Card.Text className="fw-bold">
                                Language: {movieData.Language}
                            </Card.Text>
                            <Card.Text className="fw-bold">
                                Metascore: {movieData.Metascore}
                            </Card.Text>
                            <Card.Text className="fw-bold">
                                Rated: {movieData.Rated}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </>
            ) : (
                <Spinner animation="grow" />
            )}
        </>
    );
};
export default MovieDetails;
