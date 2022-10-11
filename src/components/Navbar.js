import React from 'react'
// import PropTypes from "prop-types";
// import { Link } from 'react-router-dom';

function Navbar2(props) {
    return (
        <div>
            <header className={`p-3 text-bg-${props.mode}`}>
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a className={`navbar-brand text-${props.mode === 'dark' ? 'light' : 'dark'}`} href="/">
                            <h3><b>{props.title}</b></h3>
                        </a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            {/* <li><a href="/home" className={`nav-link px-2 text-${props.mode==='dark'?'light':'dark'}`}>Home</a></li> */}
                            {/* <li><a href="/about" className={`nav-link px-2 text-${props.mode==='dark'?'light':'dark'}`}>About</a></li> */}
                        </ul>

                        {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div> */}
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault"
                                onClick={props.modechange}
                            />
                            <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault">
                                Enable Dark Mode
                            </label>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar2
