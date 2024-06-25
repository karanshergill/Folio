import React, { useRef } from 'react';
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

export const Navigation = () => {

    const aboutRef = useRef(null);
    const servicesRef = useRef(null);
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }

    return (
        <MainHeader>
            <EmailLink>
                <i className="bi bi-envelope"></i>
                <a href="mailto:email@karanshergill.com">email@karanshergill.com</a>
            </EmailLink>

            <nav>
                <NavList>
                    <NavItem onClick={() => scrollToSection(aboutRef)}>About</NavItem>
                    <NavItem onClick={() => scrollToSection(servicesRef)}>Services</NavItem>
                    <NavItem onClick={() => scrollToSection(portfolioRef)}>Portfolio</NavItem>
                    <NavItem onClick={() => scrollToSection(contactRef)}>Contact</NavItem>
                </NavList>
            </nav>
        </MainHeader>
    )
}