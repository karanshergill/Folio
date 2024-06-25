import React from 'react'
import styled from 'styled-components'

const Section = styled.section.attrs({
    className: 'flex flex-col justify-center items-center mt-10 mb-20'
})``;

const ServicesWrapper = styled.div.attrs({
    className: 'grid grid-cols-2 gap-12 mt-14'
})``;

const IconContainer = styled.div.attrs({
    className: 'flex items-center justify-center bg-zinc-700 text-white rounded-full w-14 h-14'
})``;

const Icon = styled.i.attrs({
    className: 'text-2xl'
})``;

const ServiceCard = styled.div.attrs({
    className: 'flex items-center gap-10'
})``;

const ServiceItem = styled.div.attrs({
    className: 'flex flex-col'
})``;

const ServiceHeading = styled.h3.attrs({
    className: 'text-lg font-medium text-zinc-900'
})``;

const ServiceDescription = styled.p.attrs({
    className: 'text-sm text-zinc-600'
})``;

const Heading = styled.h2.attrs({
    className: 'text-3xl text-zinc-600'
})``;

const SubHeading = styled.p.attrs({
    className: 'flex flex-col items-center text-sm text-zinc-600 mt-5'
})``;

export const Services = () => {
    return (
        <>
            <Section>

                <Heading>Services</Heading>
                <SubHeading>
                    <p>Bring your digital vision to life through a seamless fusion of creativity and functionality.</p>
                    <p>I offer a range of services that elevate your online presence.</p>
                </SubHeading>

                <ServicesWrapper>

                    <ServiceCard>
                        <IconContainer>
                            <Icon className="bi bi-display"></Icon>
                        </IconContainer>
                        <ServiceItem>
                            <ServiceHeading>Front-End Development</ServiceHeading>
                            <ServiceDescription>Coding front-end with React JS, Astro JS, Tailwind CSS</ServiceDescription>
                        </ServiceItem>
                    </ServiceCard>

                    <ServiceCard>
                        <IconContainer>
                            <Icon className="bi bi-hdd-rack"></Icon>
                        </IconContainer>
                        <ServiceItem>
                            <ServiceHeading>Back-End Development</ServiceHeading>
                            <ServiceDescription>Coding backen-end with Node JS, Mongo DB</ServiceDescription>
                        </ServiceItem>
                    </ServiceCard>

                    <ServiceCard>
                        <IconContainer>
                            <Icon className="bi bi-globe"></Icon>
                        </IconContainer>
                        <ServiceItem>
                            <ServiceHeading>Network Penetration Testing</ServiceHeading>
                            <ServiceDescription>Black Box Testing</ServiceDescription>
                        </ServiceItem>
                    </ServiceCard>

                    <ServiceCard>
                        <IconContainer>
                            <Icon className="bi bi-shield-check"></Icon>
                        </IconContainer>
                        <ServiceItem>
                            <ServiceHeading>Web Application Security Testing</ServiceHeading>
                            <ServiceDescription>Security Testing and Code Review</ServiceDescription>
                        </ServiceItem>
                    </ServiceCard>

                </ServicesWrapper>
            </Section>

        </>
    )
}