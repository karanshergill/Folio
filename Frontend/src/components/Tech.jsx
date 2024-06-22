import React from 'react'
import styled from 'styled-components'

const Section = styled.section.attrs({})``;
const SectionHeading = styled.h2.attrs({})``;
const SkillsContainer = styled.div.attrs({})``;
const Skill = styled.div.attrs({})``;

export const Tech = () => {
    return (
        <Section>
            <SectionHeading>
                Skills
            </SectionHeading>
            <SkillsContainer>
                <Skill>
                    <img src="html.svg" alt="HTML" width="48px" />
                    <p>HTML</p>
                </Skill>
                <Skill>
                    <img src="css.svg" alt="CSS" width="48px" />
                    <p>CSS</p>
                </Skill>
                <Skill>
                    <img src="javascript.svg" alt="JavaScript" width="48px" />
                    <p>JavaScript</p>
                </Skill>
                <Skill>
                    <img src="reactjs.svg" alt="ReactJS" width="48px" />
                    <p>React</p>
                </Skill>
                <Skill>
                    <img src="nodejs.svg" alt="NodeJs" width="48px" />
                    <p>Node</p>
                </Skill>
                <Skill>
                    <img src="mongodb.svg" alt="MongoDB" width="48px" />
                    <p>MongoDB</p>
                </Skill>
                <Skill>
                    <img src="tailwindcss.svg" alt="TailwindCSS" width="48px" />
                    <p>Tailwind</p>
                </Skill>
                <Skill>
                    <img src="expressjs.svg" alt="ExpressJS" width="48px" />
                    <p>Express</p>
                </Skill>
                <Skill>
                    <img src="astrojs.svg" alt="Astro" width="34px" />
                    <p>Astro</p>
                </Skill>
            </SkillsContainer>
        </Section>
    )
};