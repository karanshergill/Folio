import React from "react";
import styled from "styled-components";

const Section = styled.section.attrs({
    className: 'flex flex-col items-center text-zinc-900'
})``;

const SectionWrapper = styled.div.attrs({
    className: 'flex flex-row gap-x-14 w-4/5'
})``;

const HeadingConatiner = styled.div.attrs({
    className: 'flex w-4/5 mb-10'
})``;

const Heading = styled.h2.attrs({
    className: 'text-3xl text-zinc-600'
})``;

const TimelineLeft = styled.div.attrs({
    className: 'flex flex-col w-1/2'
})``;

const TimelineRight = styled.div.attrs({
    className: 'flex flex-col w-1/2'
})``;

const Line = styled.div.attrs({
    className: 'border-l border-zinc-400 h-64'
})``;

export const Timeline = () => {
    return (
        <Section>
            <HeadingConatiner>
                <Heading>Education & Work</Heading>
            </HeadingConatiner>
            <SectionWrapper>
                <TimelineLeft>
                    <p>Sam Higginbottom University</p>
                    <p>Bachelor of Computer Science</p>
                    <p>Cube Technologies</p>
                    <p>Penetration Tester</p>
                    <p>Freelancer</p>
                    <p>Web Developer and Ethical Hacker</p>
                </TimelineLeft>
                <Line></Line>
                <TimelineRight>
                    <p>2016-2019</p>
                    <p>Studying Computer Science at Tokyo University opens up a world of unparalleled opportunities for academic and personal growth.</p>
                    <p>2019-2020</p>
                    <p>Embarking on the role of a Junior UI Designer through an internship is an exciting step in my professional journey.</p>
                    <p>2020-2021</p>
                    <p>I am enthusiastic about working on real-world projects, gaining exposure to industry-standard tools, and receiving constructive feedback to refine and elevate my design capabilities.</p>
                </TimelineRight>
            </SectionWrapper>
        </Section>
    )
};