import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const SearchBar = (props) => {
    return (
        <>
            <div className="w-75 mx-auto">
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Search a show"
                        aria-label="Search a show"
                        aria-describedby="search-tv-show"
                        value={props.search}
                        onChange={(e) => props.setSearch(e.target.value)}
                    />
                    <Button variant="outline-secondary" id="search-tv-show">
                        Search
                    </Button>
                </InputGroup>
            </div>
        </>
    );
};
export default SearchBar;
