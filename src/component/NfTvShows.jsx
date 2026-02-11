import NfNavbar from "./NfNavbar";
import NfCarouselBar from "./NfCarouselBar";
import NfTitleBar from "./NfTitleBar";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { Alert } from "react-bootstrap";

const NfTvShows = () => {
    const [search, setSearch] = useState("");

    return (
        <>
            <NfNavbar />
            <div className="w-50 mx-auto">
                {" "}
                <NfTitleBar />
            </div>
            <SearchBar search={search} setSearch={setSearch} />
            {search === "" ? (
                <Alert variant="success" className="w-50 mx-auto mt-5">
                    Effettua una ricerca, i risultati compariranno in automatico
                </Alert>
            ) : (
                <NfCarouselBar title={search} id="search-bar" search={search} />
            )}
        </>
    );
};
export default NfTvShows;
