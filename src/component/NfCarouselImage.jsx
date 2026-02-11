import { Component } from "react";

class NfCarouselImage extends Component {
    render() {
        return (
            <>
                <div className="col col-6 col-sm-4 col-md-2">
                    <a href="#">
                        <img
                            src={this.props.src}
                            className="d-block w-100 change-ratio img-cont"
                            alt={`${this.props.year} - ${this.props.title} - Poster`}
                            onError={(err) =>
                                (err.currentTarget.src =
                                    "/assets/img/imageNotAvailable.png")
                            }
                        />
                    </a>
                </div>
            </>
        );
    }
}
export default NfCarouselImage;
