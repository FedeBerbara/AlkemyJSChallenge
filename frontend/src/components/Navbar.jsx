import React from "react";
import { Link } from 'react-router-dom';

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
                    <Link className="nav-link" to="/">Movements <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/operations/incomes">Incomes</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/operations/expenses">Expenses</Link>
                </li>
            </ul>
        </div>
    </nav>
    </>
  );
};

export default Navbar;
