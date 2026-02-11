import { Component } from "react";
import NfNavbar from "./NfNavbar";
import NfMain from "./NfMain";
import NfEditProfile from "./NfEditProfile";
import Button from "react-bootstrap/Button";

class PageChooser extends Component {
    state = {
        home: true,
    };

    render() {
        return (
            <>
                <div className="text-center py-3 bg-light border-top border-black">
                    {this.state.home === false && (
                        <Button
                            variant="warning"
                            className="me-3 px-5"
                            onClick={(e) => {
                                e.preventDefault();
                                this.setState({
                                    home: true,
                                });
                            }}>
                            Home
                        </Button>
                    )}
                    {this.state.home === true && (
                        <Button
                            variant="warning"
                            className="ms-3 px-5"
                            onClick={(e) => {
                                e.preventDefault();
                                this.setState({
                                    home: false,
                                });
                            }}>
                            Edit Profile
                        </Button>
                    )}
                </div>
                {this.state.home === true && <NfNavbar />}
                {this.state.home === true && <NfMain />}
                {this.state.home === false && <NfEditProfile />}
            </>
        );
    }
}
export default PageChooser;
