import React from 'react'
import styled from 'styled-components';
import '../index.css';
import { Socials } from './Socials';

const HeroSection = styled.section.attrs({
  className: 'flex flex-col items-center py-12'
})``;

const HeroProfile = styled.div.attrs({
  className: 'flex flex-col items-center py-10 max-w-xl text-center'
})``;

const HeroDescription = styled.div.attrs({
  className: 'pt-5 max-w-sm text-center'
})``;

const HeroButtons = styled.div.attrs({
  className: 'flex gap-4 justify-center items-center pb-10'
})``;

const HireMeButton = styled.button.attrs({
  className: 'py-2 px-4 bg-zinc-800 text-white rounded-full'
})``;

const Heading = styled.h1.attrs({
  className: 'text-xl pt-6 pb-4 text-zinc-900'
})``;

const SubHeading = styled.h2.attrs({
  className: 'text-4xl py-2 text-zinc-700'
})``;

const Description = styled.p.attrs({
  className: 'text-zinc-700'
})``;

export const Hero = () => {
  return (
    <HeroSection>
      <HeroProfile>
        <img src="profile_image.png" alt="Profile Image" width="150" height="150" />
        <Heading>Hi! I'm Karan Shergill 👋</Heading>
        <SubHeading>Software Developer and Secuirty Researcher</SubHeading>
        <HeroDescription>
          <Description>A Full-Stack Web Developer and an Ethical Hacker. As a developer I speicalize in MERN stack, Network and Web Security.</Description>
        </HeroDescription>
      </HeroProfile>
      <HeroButtons>
        <HireMeButton>Hire Me</HireMeButton>
        <button>Download CV</button>
        <i className="bi bi-download"></i>
      </HeroButtons>
      <Socials />
    </HeroSection>
  )
}
