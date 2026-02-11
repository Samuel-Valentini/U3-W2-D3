import { useParams } from "react-router-dom";
import { plotFull, urlAPIid } from "./constants";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Button, Form, Spinner } from "react-bootstrap";
import ReviewsAccordion from "./ReviewsAccordion";
import AddComment from "./AddComment";

const MovieDetails = () => {
    const id = useParams().id;
    const [movieData, setMovieData] = useState(null);

    // da qui

    const [dataToSend, setDataToSend] = useState({
        comment: "",
        rate: "",
        elementId: "",
    });
    const [shouldPost, setShouldPost] = useState(false);

    // a qui

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
                    {/* qui */}
                    <hr />
                    <h2>Reviews</h2>
                    <ReviewsAccordion id={movieData.imdbID}></ReviewsAccordion>
                    <Form
                        className="me-3"
                        onSubmit={(e) => {
                            e.preventDefault();
                            if (dataToSend.rate !== "") {
                                setShouldPost(true);
                            } else {
                                alert("rate non inserito");
                            }
                        }}>
                        <h4 className="text-center mt-3">Leave a review</h4>

                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1">
                            <Form.Control
                                required
                                as="textarea"
                                rows={3}
                                value={dataToSend.comment}
                                onChange={(e) => {
                                    setDataToSend({
                                        ...dataToSend,
                                        comment: e.target.value,
                                        elementId: movieData.imdbID,
                                    });
                                }}
                            />
                        </Form.Group>
                        <Form.Select
                            value={dataToSend.rate}
                            onChange={(e) => {
                                setDataToSend({
                                    ...dataToSend,
                                    rate: e.target.value,
                                });
                            }}
                            required
                            aria-label="Default select example">
                            <option value="">Rate</option>
                            <option value="1"> &#9733; 1/5</option>
                            <option value="2"> &#9733;&#9733; 2/5</option>
                            <option value="3">
                                {" "}
                                &#9733;&#9733;&#9733; 3/5
                            </option>
                            <option value="4">
                                {" "}
                                &#9733;&#9733;&#9733;&#9733; 4/5
                            </option>
                            <option value="5">
                                {" "}
                                &#9733;&#9733;&#9733;&#9733;&#9733;5/5
                            </option>
                        </Form.Select>
                        {shouldPost && (
                            <AddComment
                                dataToSend={dataToSend}
                                onDone={(ok) => {
                                    setShouldPost(false);

                                    if (ok) {
                                        setDataToSend((prev) => ({
                                            ...prev,
                                            comment: "",
                                            rate: "",
                                            elementId: "",
                                        }));
                                    }
                                }}></AddComment>
                        )}
                        <div className="text-center mt-2">
                            <Button type="submit">Submit</Button>
                        </div>
                    </Form>{" "}
                    {/* qui */}
                    {/* <ReviewsAccordion id={movieData.imdbID}></ReviewsAccordion> */}
                </>
            ) : (
                <Spinner animation="grow" />
            )}
        </>
    );
};
export default MovieDetails;
