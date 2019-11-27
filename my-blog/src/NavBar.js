import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export class NavBar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/articles-list">Articles</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}