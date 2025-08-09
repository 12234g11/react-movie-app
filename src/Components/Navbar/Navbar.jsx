import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useEffect } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const el = sectionId
      ? document.getElementById(sectionId)
      : document.body;

    if (el) {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
      const y = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleNavClick = (sectionId) => {
    if (location.pathname !== "/home") {
      navigate("/home", { state: { scrollTo: sectionId } });
    } else {
      scrollToSection(sectionId);
    }
  };


React.useEffect(() => {
  if (location.state?.scrollTo) {
    setTimeout(() => {
      scrollToSection(location.state.scrollTo);
    }, 300);
    window.history.replaceState({}, document.title);
  }
}, [location.state]);


  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="right-nav d-flex align-items-center">
          <div className="social-media">
            <i className="fab mx-1 fa-facebook"></i>
            <i className="fab mx-1 fa-instagram"></i>
            <i className="fab mx-1 fa-twitter"></i>
            <i className="fab mx-1 fa-spotify"></i>
            <i className="fab mx-1 fa-youtube"></i>
          </div>
        </div>

        <ul className="navbar-nav d-none d-lg-flex flex-row gap-3 ms-auto">
          <li className="nav-item">
            <button className="nav-link btn btn-link" onClick={() => handleNavClick(null)}>
              Home
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-link" onClick={() => handleNavClick("moviesSection")}>
              Movies
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-link" onClick={() => handleNavClick("tvSection")}>
              TV
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-link" onClick={() => handleNavClick("peopleSection")}>
              People
            </button>
          </li>
        </ul>

        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>

      <div className="offcanvas offcanvas-end d-lg-none" id="offcanvasNavbar">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => handleNavClick(null)}
                data-bs-dismiss="offcanvas"
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => handleNavClick("moviesSection")}
                data-bs-dismiss="offcanvas"
              >
                Movies
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => handleNavClick("tvSection")}
                data-bs-dismiss="offcanvas"
              >
                TV
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => handleNavClick("peopleSection")}
                data-bs-dismiss="offcanvas"
              >
                People
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
