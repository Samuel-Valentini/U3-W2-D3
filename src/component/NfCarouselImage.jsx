import { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class NfCarouselImage extends Component {
    render() {
        const linkMovie = `/movie-details/${this.props.id}`;

        return (
            <>
                <div className="col col-6 col-sm-4 col-md-2">
                    <Link to={linkMovie}>
                        <img
                            src={this.props.src}
                            className="d-block w-100 change-ratio img-cont"
                            alt={`${this.props.year} - ${this.props.title} - Poster`}
                            onError={(err) =>
                                (err.currentTarget.src =
                                    "/assets/img/imageNotAvailable.png")
                            }
                        />
                    </Link>
                </div>
            </>
        );
    }
}
export default NfCarouselImage;
