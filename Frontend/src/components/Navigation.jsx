import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../index.css';

const MainHeader = styled.header.attrs({
  className: 'flex justify-between px-8 mt-4'
})``;

const EmailLink = styled.div.attrs({
    className: 'flex align-center gap-2 py-1 px-2'
})``

const NavList = styled.ul.attrs({
    className: 'flex gap-4'
})``;

const NavItem = styled.li.attrs({
    className: 'py-1 px-2 font-normal hover:font-medium hover:ease-in-out duration-300 hover:ring-1 hover:ring-zinc-600 hover:rounded-full'
})``;

const NavLink = styled(Link).attrs({
    className: '' // Add Tailwind CSS classes here
})``;

export const Navigation = () => {
    return (
        <MainHeader>
            <EmailLink>
                <i className="bi bi-envelope"></i>
                <a href="mailto:email@karanshergill.com">email@karanshergill.com</a>
            </EmailLink>

            <nav>
                <NavList>
                    <NavItem><NavLink to="/">Home</NavLink></NavItem>
                    <NavItem><NavLink to="/about">About</NavLink></NavItem>
                    <NavItem><NavLink to="/services">Services</NavLink></NavItem>
                    <NavItem><NavLink to="/portfolio">Portfolio</NavLink></NavItem>
                    <NavItem><NavLink to="/contact">Contact</NavLink></NavItem>
                </NavList>
            </nav>
        </MainHeader>
    )
}