import React from 'react';
import { Link } from 'react-router-dom';


export const Nav = () => (
    <nav className="nav">
        <Link to="/">
              Home
        </Link>
        <Link to="/add">
            Create a New Project
        </Link>
        <Link to="/list">
            Current Projects
        </Link>
    </nav>
)
