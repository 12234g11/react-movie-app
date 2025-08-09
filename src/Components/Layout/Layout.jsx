import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTopOnNavigate from "../ScrollToTopOnNavigate/ScrollToTopOnNavigate";


export default function Layout() {
  return (
    <>
      <ScrollToTopOnNavigate /> {/* هنا علشان يتنفذ مع أي صفحة */}
      <Navbar />
      <div className="container mt-5 pt-5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
