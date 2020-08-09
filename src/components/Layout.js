import React from "react";
import { Link } from "react-router-dom";

function Layout(props) {
  return (
    <div className="Layout">
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <ul className="navbar-nav flex-row">
            <li className="nav-item active mr-4">
              <Link to="/" className="nav-link">
                TodoList
              </Link>
            </li>
            <li>
              <Link to="/info" className="nav-link active">
                Info
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">{props.children}</div>
    </div>
  );
}

export default Layout;
