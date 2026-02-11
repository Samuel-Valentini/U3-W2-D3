import { useState } from "react";
import NfTitleBar from "./NfTitleBar";
import NfCarouselBar from "./NfCarouselBar";
import SearchBar from "./SearchBar";
import { Alert } from "react-bootstrap";

const NfMain = () => {
    const [search, setSearch] = useState("");
    const titleText = `Risultati di ricerca per: ${search}`;

    return (
        <>
            {" "}
            <main>
                <section className="container">
                    <NfTitleBar />
                    <SearchBar search={search} setSearch={setSearch} />
                    {search === "" ? (
                        <Alert variant="success" className="w-50 mx-auto mt-5">
                            Effettua una ricerca, i risultati compariranno in
                            automatico
                        </Alert>
                    ) : (
                        <NfCarouselBar
                            title={titleText}
                            id="search-bar"
                            search={search}
                        />
                    )}
                    <NfCarouselBar
                        title="Star Wars"
                        id="starWars"
                        search="Star Wars"
                    />
                    <NfCarouselBar
                        title="Ghost in the Shell"
                        id="ghostInTheShell"
                        search="Ghost in the Shell"
                    />
                    <NfCarouselBar
                        title="Star Trek"
                        id="starTrek"
                        search="Star Trek"
                    />
                </section>
            </main>
        </>
    );
};
export default NfMain;
