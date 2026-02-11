import { Component } from "react";

class NfFooter extends Component {
    render() {
        return (
            <>
                <footer className="footer-netflix py-5 text-secondary text-center text-md-start w-50 mx-auto">
                    <div className="container text-secondary">
                        <div className="d-flex gap-3 mb-4 text-center text-lg-start justify-content-center justify-content-md-start">
                            <a
                                className="social-icon"
                                href="#"
                                aria-label="Facebook">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a
                                className="social-icon"
                                href="#"
                                aria-label="Instagram">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a
                                className="social-icon"
                                href="#"
                                aria-label="Twitter">
                                <i className="bi bi-twitter-x"></i>
                            </a>
                            <a
                                className="social-icon"
                                href="#"
                                aria-label="YouTube">
                                <i className="bi bi-youtube"></i>
                            </a>
                        </div>

                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 text-secondary">
                            <div className="col">
                                <ul className="list-unstyled m-0">
                                    <li className="mb-2">
                                        <a
                                            className="footer-link text-secondary"
                                            href="#">
                                            Audio and Subtitles
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            className="footer-link text-secondary"
                                            href="#">
                                            Media Center
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            className="footer-link text-secondary"
                                            href="#">
                                            Privacy
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            className="footer-link text-secondary"
                                            href="#">
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col">
                                <ul className="list-unstyled m-0">
                                    <li className="mb-2">
                                        <a
                                            className="footer-link text-secondary"
                                            href="#">
                                            Audio Description
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            className="footer-link text-secondary"
                                            href="#">
                                            Investor Relations
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            className="footer-link text-secondary"
                                            href="#">
                                            Legal Notices
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col">
                                <ul className="list-unstyled m-0">
                                    <li className="mb-2">
                                        <a
                                            className="footer-link text-secondary"
                                            href="#">
                                            Help Center
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            className="footer-link text-secondary"
                                            href="#">
                                            Jobs
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            className="footer-link text-secondary"
                                            href="#">
                                            Cookie Preferences
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col">
                                <ul className="list-unstyled m-0">
                                    <li className="mb-2">
                                        <a
                                            className="footer-link text-secondary"
                                            href="#">
                                            Gift Cards
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            className="footer-link text-secondary"
                                            href="#">
                                            Terms of Use
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            className="footer-link text-secondary"
                                            href="#">
                                            Corporate Information
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <!-- Bottom --> */}
                        <div className="mt-4">
                            <button
                                type="button"
                                className="btn btn-outline-secondary btn-sm rounded-0 px-3">
                                Service Code
                            </button>

                            <div className="small text-secondary mt-3">
                                © 1997-2019 Netflix, Inc.
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}
export default NfFooter;
