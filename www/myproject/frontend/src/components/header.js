import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-faded">
                <div className="container">
                    <li className="navbar-header">
                        <Link to="/" className="navbar-brand">
                        My Project
                        </Link>
                    </li>
                </div>
            </nav>
        );
    }
}

export default Header;
