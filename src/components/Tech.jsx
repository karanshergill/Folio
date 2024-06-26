import React from 'react'
import styled from 'styled-components'

const FlexWrapper = styled.section.attrs({
    className: 'flex flex-col items-center mt-10 pb-10'
})``;
const SectionHeading = styled.h2.attrs({
    className: 'text-3xl text-zinc-600 mb-10'
})``;
const GridContainer = styled.div.attrs({
    className: 'grid grid-cols-9 gap-8 place-items-center text-center'
})``;
const LogoContainer = styled.div.attrs({
    className: 'flex flex-col items-center gap-2'
})``;

const Logo = styled.img.attrs({
    className: ''
})``;

export const Tech = () => {
    return (
        <FlexWrapper>
            <SectionHeading>
                Tech-Stack
            </SectionHeading>
            <GridContainer>
                <LogoContainer>
                    <Logo src="html.svg" alt="HTML" width="50rem" height="50rem" />
                    <small>HTML</small>
                </LogoContainer>
                <LogoContainer>
                    <Logo src="css.svg" alt="CSS" width="50vw" />
                    <small>CSS</small>
                </LogoContainer>
                <LogoContainer>
                    <Logo src="javascript.svg" alt="JavaScript" width="50vw" />
                    <small>JavaScript</small>
                </LogoContainer>
                <LogoContainer>
                    <Logo src="reactjs.svg" alt="ReactJS" width="50vw" />
                    <small>React</small>
                </LogoContainer>
                <LogoContainer>
                    <Logo src="astrojs.svg" alt="Astro" width="40vw" />
                    <small>Astro JS</small>
                </LogoContainer>
                <LogoContainer>
                    <Logo src="nodejs.svg" alt="NodeJs" width="50vw" />
                    <small>Node</small>
                </LogoContainer>
                <LogoContainer>
                    <Logo src="mongodb.svg" alt="MongoDB" width="50vw" />
                    <small>MongoDB</small>
                </LogoContainer>
                <LogoContainer>
                    <Logo src="tailwindcss.svg" alt="TailwindCSS" width="50vw" />
                    <small>Tailwind CSS</small>
                </LogoContainer>
                <LogoContainer>
                    <Logo src="expressjs.svg" alt="ExpressJS" width="50vw" />
                    <small>Express</small>
                </LogoContainer>
            </GridContainer>
        </FlexWrapper>
    )
};