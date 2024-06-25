import React from 'react'
import styled from 'styled-components'

const FlexWrapper = styled.section.attrs({
    className: 'flex flex-col items-center'
})``;
const SectionHeading = styled.h2.attrs({
    className: 'text-3xl text-zinc-600 mb-5'
})``;
const GridContainer = styled.div.attrs({
    className: 'grid grid-cols-9 gap-8 place-items-center text-center'
})``;
const LogoContainer = styled.div.attrs({
    className: 'flex flex-col items-center gap-2'
})``;

export const Tech = () => {
    return (
        <FlexWrapper>
            <SectionHeading>
                Skills
            </SectionHeading>
            <GridContainer>
                <LogoContainer>
                    <img src="html.svg" alt="HTML" width="50vw" />
                    <small>HTML</small>
                </LogoContainer>
                <LogoContainer>
                    <img src="css.svg" alt="CSS" width="50vw" />
                    <small>CSS</small>
                </LogoContainer>
                <LogoContainer>
                    <img src="javascript.svg" alt="JavaScript" width="50vw" />
                    <small>JavaScript</small>
                </LogoContainer>
                <LogoContainer>
                    <img src="reactjs.svg" alt="ReactJS" width="50vw" />
                    <small>React</small>
                </LogoContainer>
                <LogoContainer>
                    <img src="astrojs.svg" alt="Astro" width="40vw" />
                    <small>Astro JS</small>
                </LogoContainer>
                <LogoContainer>
                    <img src="nodejs.svg" alt="NodeJs" width="50vw" />
                    <small>Node</small>
                </LogoContainer>
                <LogoContainer>
                    <img src="mongodb.svg" alt="MongoDB" width="50vw" />
                    <small>MongoDB</small>
                </LogoContainer>
                <LogoContainer>
                    <img src="tailwindcss.svg" alt="TailwindCSS" width="50vw" />
                    <small>Tailwind CSS</small>
                </LogoContainer>
                <LogoContainer>
                    <img src="expressjs.svg" alt="ExpressJS" width="50vw" />
                    <small>Express</small>
                </LogoContainer>
            </GridContainer>
        </FlexWrapper>
    )
};