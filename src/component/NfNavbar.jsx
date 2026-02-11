import { Component } from "react";
import { Link } from "react-router-dom";

class NfNavbar extends Component {
    render() {
        return (
            <>
                {/* <!-- navbar start --> */}

                <header>
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-dark netflix-nav py-0">
                            <div className="container-fluid px-0">
                                <a
                                    className="navbar-brand d-flex align-items-center me-4"
                                    href="/">
                                    <span>
                                        <img
                                            src="/assets/img/netflix_logo.png"
                                            alt="Netflix Logo"
                                            className="logo"
                                        />
                                    </span>
                                </a>

                                <button
                                    className="navbar-toggler border-0"
                                    id="mini-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#mainNav">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div
                                    className="collapse navbar-collapse"
                                    id="mainNav">
                                    <ul className="navbar-nav align-items-lg-center gap-lg-2">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Home
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link active fw-semibold"
                                                to="/tv-shows">
                                                TV Shows
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Movies
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Recently Added
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                My List
                                            </a>
                                        </li>
                                    </ul>

                                    <div className="ms-auto d-flex align-items-center gap-3 py-2 py-lg-0">
                                        <a
                                            className="nav-icon"
                                            href="#"
                                            aria-label="Search">
                                            <i className="bi bi-search"></i>
                                        </a>
                                        <a
                                            className="nav-link kids-link d-none d-lg-inline"
                                            href="#">
                                            KIDS
                                        </a>
                                        <a
                                            className="nav-icon"
                                            href="#"
                                            aria-label="Notifications">
                                            <i className="bi bi-bell-fill"></i>
                                        </a>

                                        <a
                                            className="d-flex align-items-center gap-2 text-decoration-none"
                                            href="/edit-profile">
                                            <img
                                                className="avatar"
                                                src="/assets/img/avatar.png"
                                                alt="profile"
                                            />
                                            <i className="bi bi-caret-down-fill text-white-50 small"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    {/* <!-- navbar end --> */}
                </header>
            </>
        );
    }
}
export default NfNavbar;
