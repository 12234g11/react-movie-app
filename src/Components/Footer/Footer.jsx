import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="glow-line"></div>
        <div className="footer-content container">
          <p className="footer-logo">
            www.MovieApp.com
          </p>

          <div className="footer-text">
            <p className="h6">
              MovieApp is your go-to platform for exploring the latest movies and TV shows,
              with ratings, reviews, and trending content all in one place.
            </p>
          </div>

          <div className="footer-social">
          <a href="https://github.com/12234g11" target="_blank" rel="noreferrer" title="GitHub">
              <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/yasser-khalid-69a905297" target="_blank" rel="noreferrer" title="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
            <a href="mailto:yaserkhaled1717999@gmail.com" title="Send me an email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom text-center">
          <p>
            © {new Date().getFullYear()} Movie App. All Rights Reserved.  
            <br />
            Designed & Developed by <strong>Yasser Khaled</strong>
          </p>
        </div>
      </footer>
    </>
  );
}
