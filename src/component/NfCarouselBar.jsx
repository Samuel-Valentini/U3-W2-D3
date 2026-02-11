import { Component } from "react";
import NfCarouselItem from "./NfCarouselItem";

class NfCarouselBar extends Component {
    render() {
        return (
            <>
                {" "}
                <div className="row p-0">
                    <div className="col text-white fw-semibold mb-2">
                        {this.props.title}
                    </div>
                </div>
                <div className="row justify-content-start mb-4">
                    <div className="col col-12">
                        <div id={this.props.id} className="carousel slide">
                            <div className="carousel-inner">
                                <NfCarouselItem
                                    active="active"
                                    position={1}
                                    search={this.props.search}></NfCarouselItem>
                                <NfCarouselItem
                                    active=""
                                    position={2}
                                    search={this.props.search}></NfCarouselItem>
                                <NfCarouselItem
                                    active=""
                                    position={3}
                                    search={this.props.search}></NfCarouselItem>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target={"#" + this.props.id}
                                data-bs-slide="prev">
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"></span>
                                <span className="visually-hidden">
                                    Previous
                                </span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target={"#" + this.props.id}
                                data-bs-slide="next">
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default NfCarouselBar;
