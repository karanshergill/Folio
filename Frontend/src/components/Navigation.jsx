import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <header>
            <div>
                <i class="bi bi-envelope"></i>
                <a href="mailto:email@karanshergill.com">email@karanshergill.com</a>
            </div>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}