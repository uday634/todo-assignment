import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useSelector } from 'react-redux';
import { authActions } from "../../store";
import { UseDispatch, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const history = useNavigate();
  const displach = useDispatch();
  const logout = () => {
    sessionStorage.clear('id')
    displach(authActions.logout)
    history('/home')
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <b> &nbsp; TODO LIST</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-1">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link className="nav-link active" to="/todo">
                  Todo
                </Link>
              </li>
              {isLoggedIn ? (
                <>
                  <li className="nav-item mx-1" onClick = {logout}>
                    <Link className="nav-link active btn-nav" to="/logout">
                      Log Out
                    </Link>
                    
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item mx-1">
                    <Link className="nav-link active btn-nav" to="/signUp">
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item mx-1">
                    <Link className="nav-link active btn-nav" to="/signIn">
                      Sign In
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
