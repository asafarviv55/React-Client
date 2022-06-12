import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import AddUser from "./components/AddUser.js";
import User from "./components/User";
import UsersList from "./components/UsersList";


function App() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/users/list"} className="nav-link">
                Users
              </Link>
            </li>
            <li className="nav-item"> 
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <Routes>
            <Route path= "/users/list" element={<UsersList/>} />
            <Route exact path="/add" element={<AddUser/>} />
          </Routes>
        </div>
      </div>
    );
  }
  export default App;