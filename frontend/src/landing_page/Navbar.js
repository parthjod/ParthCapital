import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img
            className="img1"
            src="media\Zassets\logo.svg"
            style={{ width: "25%" }}
            alt="logo"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav mb-lg-0">
              <li class="nav-item fw-medium">
                <a class="nav-link" href="http://localhost:3001">
                  Signup
                </a>
              </li>
              <li class="nav-item fw-medium">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item fw-medium">
                <Link class="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li class="nav-item fw-medium">
                <Link class="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item fw-medium">
                <Link class="nav-link" to="/support">
                  Support
                </Link>
              </li>
              <li className="bars">
                <i class="fa-solid fa-bars"></i>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
