import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";
import "./App.css";
import NfFooter from "./component/NfFooter";
import NfNavbar from "./component/NfNavbar";
import NfMain from "./component/NfMain";
import NfEditProfile from "./component/NfEditProfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NfTvShows from "./component/NfTvShows";
import { Alert } from "react-bootstrap";
import MovieDetails from "./component/MovieDetails";

// grazie al bottone giallo in alto nella pagina si può passare da home a edit profile

function App() {
    return (
        <>
            <BrowserRouter>
                <div className="index">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <NfNavbar />
                                    <NfMain />
                                </>
                            }
                        />
                        <Route
                            path="/edit-profile"
                            element={<NfEditProfile />}
                        />
                        <Route
                            path="/tv-shows"
                            element={<NfTvShows></NfTvShows>}
                        />
                        <Route
                            path="movie-details/:id"
                            element={
                                <>
                                    <NfNavbar />
                                    <Alert
                                        variant="success"
                                        className="w-50 mx-auto mt-5">
                                        qui vanno i dettagli
                                    </Alert>
                                    <MovieDetails></MovieDetails>
                                </>
                            }
                        />
                    </Routes>
                    <NfFooter></NfFooter>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
