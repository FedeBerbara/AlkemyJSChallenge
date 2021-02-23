import React from "react";

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <h1 className="navbar-brand mt-1" href="https://www.google.com.ar">Budget Manager APP</h1>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="https://www.google.com.ar">Movements <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.google.com.ar">Incomes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.google.com.ar">Expenses</a>
                </li>
            </ul>
        </div>
    </nav>
    </>
  );
};

export default Navbar;
