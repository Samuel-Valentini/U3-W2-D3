import { Component } from "react";

class NfTitleBar extends Component {
    render() {
        return (
            <>
                <div className="row mb-3">
                    <div className="col">
                        <div className="row align-items-center justify-content-start flex-nowrap">
                            <h1 className="text-white col text-nowrap">
                                TV Shows
                            </h1>
                            <div className="dropdown col">
                                <button
                                    className="btn btn-secondary dropdown-toggle rounded-0 bg-black py-0 fs-6"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Genres
                                </button>
                                <ul className="dropdown-menu rounded-0 bg-black">
                                    <li>
                                        <a
                                            className="dropdown-item text-white"
                                            href="#">
                                            All
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item text-white"
                                            href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item text-white"
                                            href="#">
                                            Fantasy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col text-end">
                        <div
                            className="btn-group rounded-0"
                            role="group"
                            aria-label="View toggle">
                            <button
                                type="button"
                                className="btn btn-outline-light rounded-0">
                                <i className="bi bi-list"></i>
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-light rounded-0">
                                <i className="bi bi-grid-3x3-gap-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default NfTitleBar;
