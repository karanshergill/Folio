import React from 'react'
import styled from 'styled-components';
import '../index.css';

const HeroSection = styled.section.attrs({
  className: 'flex flex-col items-center py-16'
})``;

const HeroProfile = styled.div.attrs({
  className: 'flex flex-col items-center py-10 max-w-xl text-center'
})``;

const HeroDescription = styled.div.attrs({
  className: 'pt-5 max-w-sm text-center'
})``;

const HeroButtons = styled.div.attrs({
  className: 'flex gap-4 justify-center items-center'
})``;

const HireMeButton = styled.button.attrs({
  className: 'py-2 px-4 bg-zinc-700 text-white rounded-full'
})``;

const StyledH1 = styled.h1.attrs({
  className: 'text-xl pt-6 pb-4'
})``;

const StyledH2 = styled.h2.attrs({
  className: 'text-4xl py-2'
})``;

export const Hero = () => {
  return (
    <HeroSection>
      <HeroProfile>
        <img src="profile_image.png" alt="Profile Image" width="150" height="150" />
        <StyledH1>Hi! I'm Karan Shergill 👋</StyledH1>
        <StyledH2>Software Developer and Secuirty Researcher</StyledH2>
        <HeroDescription>
          <p>A Full-Stack Web Developer and an Ethical Hacker. As a developer I speicalize in MERN stack, Network and Web Security.</p>
        </HeroDescription>
      </HeroProfile>
      <HeroButtons>
        <HireMeButton>Hire Me</HireMeButton>
        <button>Download CV</button>
        <i className="bi bi-download"></i>
      </HeroButtons>
    </HeroSection>
  )
}
