import { Component } from "react";

class NfEditProfile extends Component {
    render() {
        return (
            <>
                <div
                    className="edit-profile"
                    data-bs-theme="dark"
                    style={{ color: "white" }}>
                    <header>
                        <a href="/">
                            <img
                                src="/assets/img/netflix_logo.png"
                                alt="Netflix logo"
                            />
                        </a>
                    </header>

                    <main>
                        <section
                            className="container"
                            style={{ maxWidth: "470px" }}>
                            <h1 className="row border-bottom pb-2 fw-normal">
                                Edit profile
                            </h1>
                            <div className="row">
                                <div className="col col-12 col-sm-3 text-center text-sm-start p-0 pe-sm-1 mt-3 e">
                                    {/* <!-- immagine profilo, su schermi xs occupa tutto lo schermo --> */}
                                    <div className="position-relative overflow-hidden fitter">
                                        <img
                                            className="img-fluid"
                                            src="/assets/img/avatar.png"
                                            alt="profile's picture"
                                        />

                                        <div
                                            style={{
                                                height: "20px",
                                                width: "20px",
                                            }}
                                            className="position-absolute bottom-0 start-0 m-1 bg-black rounded-circle border border-white border-2 text-center d-flex justify-content-center align-items-center shadow">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="8"
                                                height="8"
                                                fill="currentColor"
                                                className="bi bi-pencil-fill"
                                                viewBox="0 0 16 16">
                                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-sm-9 mt-3 text-start">
                                    {/* <!-- dati del profilo --> */}

                                    <input
                                        className="form-control text-center text-sm-start fw-medium rounded-0"
                                        id="profile-name"
                                        type="text"
                                        value="Strive Student"
                                        aria-label="Profile name - Disabled input"
                                        disabled
                                        readOnly
                                    />

                                    <div className="mt-4">Language:</div>
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-secondary dropdown-toggle rounded-0 bg-black py-0 fs-6"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            English
                                        </button>
                                        <ul className="dropdown-menu rounded-0 bg-black">
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#">
                                                    English
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#">
                                                    Arabic
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#">
                                                    Italian
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <hr />
                                    <div className="mt-4">
                                        Maturity Settings:
                                    </div>
                                    <button
                                        type="button"
                                        className="btn btn-dark btn-sm text-uppercase shadow-sm rounded-1 px-3 fw-semibold fs-7 mt-3">
                                        All maturity ratings
                                    </button>
                                    <div className="mt-3 fs-8">
                                        Show titles of all maturity ratings for
                                        this profile.
                                    </div>
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary btn-sm text-uppercase rounded-0 mt-3 px-3 mb-3">
                                        Edit
                                    </button>
                                    <hr />
                                    <div className="mt-4">
                                        Autoplay controls
                                    </div>
                                    <div className="form-check d-flex align-items-center">
                                        <input
                                            type="checkbox"
                                            className="form-check-input bg-transparent border-dark rounded-0 p-3"
                                            defaultChecked
                                        />
                                        <label htmlFor="" className="fs-8">
                                            &nbsp;Autoplay next episode in a
                                            series on all devices.
                                        </label>
                                    </div>
                                    <div className="form-check d-flex align-items-center">
                                        <input
                                            type="checkbox"
                                            className="form-check-input bg-transparent border-dark rounded-0 p-3"
                                            defaultChecked
                                        />
                                        <label htmlFor="" className="fs-8">
                                            &nbsp;Autoplay previews while
                                            browsing on all devices.
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="text-center text-sm-start justify-content-center justify-content-sm-start row row-cols-2 row-cols-sm-3 gap-3 mb-5">
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary btn-sm bg-white text-black fw-bold text-uppercase rounded-0 mt-2 px-4 col w-auto letter-spacing"
                                    id="hover">
                                    Save
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary btn-sm text-uppercase fw-semibold rounded-0 mt-2 px-4 col w-auto letter-spacing">
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary btn-sm text-uppercase fw-semibold rounded-0 mt-2 px-4 col w-auto letter-spacing">
                                    Delete Profile
                                </button>
                            </div>
                        </section>
                    </main>
                </div>
            </>
        );
    }
}
export default NfEditProfile;
