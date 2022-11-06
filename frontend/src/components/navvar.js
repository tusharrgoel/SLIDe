import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navvar() {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg ">
          <img
            src="logoSLIDe.png"
            width="50"
            height="50"
            class="d-inline-block align-top"
            alt=""
          />
          SLIDe
        
        <form class="d-flex">
          <input
            class="form-control mx-2"
         
            type="search"
            placeholder="Date"
            aria-label="search"
          />
        </form>
        <form class="d-flex star">
          <input
            class="form-control"
            
            type="text"
            placeholder="Search by Location"
            aria-label="search"
          />
        </form>
        <button class="btn btn-light mx-3" type="submit">
          <a href=".\register_Admin.html">
            <Link to="/registerAdmin">RegisterAdmin</Link>
          </a>
        </button>

        <button class="btn btn-light mx-3" type="submit">
          <a href=".\register_user.html">
            <Link to="/registerUser">User</Link>
          </a>
        </button>
        <div class="dropdown">
          <button
            class="btn btn-outline-light dropdown-toggle mx-2"
            type="button"
            data-bs-toggle="dropdown"
          ></button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <a class="dropdown-item" href="#working">
                  How to Book
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#reviews">
                  Reviews
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#footer">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navvar;
