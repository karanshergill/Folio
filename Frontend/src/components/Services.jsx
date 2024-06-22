import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section.attrs({
    className: 'flex items-center justify-center h-auto bg-zinc-100 text-zinc-900'
})``;

const SectionWrapper = styled.div.attrs({
    className: 'flex flex-row gap-10 py-16 w-4/5'})``;

const ServiceList = styled.div.attrs({ className: 'grid grid-cols-1 gap-6' })``;

const IconBg = styled.div.attrs({
    className: 'flex items-center justify-center bg-zinc-700 text-white rounded-full w-14 h-14'
})``;

const Icon = styled.i.attrs({
    className: 'text-2xl'
})``;

const ServiceCard = styled.div.attrs({
    className: 'flex'
})``;

const ServiceItemDescription = styled.div.attrs({
    className: 'flex flex-col pl-6'
})``;

const ServiceHeading = styled.p.attrs({
    className: 'text-lg font-medium -mb-1 text-zinc-900'
})``;

const ServiceDescription = styled.div.attrs({})``;

export const Services = () => {
    return (
        <StyledSection>
            <SectionWrapper>
            <ServiceList >
                <ServiceCard>
                    <IconBg>
                        <Icon className="bi bi-display"></Icon>
                    </IconBg>
                    <ServiceItemDescription>
                        <ServiceHeading>Front-End Development</ServiceHeading>
                        <p>Coding front-end with React JS, Astro JS, Tailwind CSS</p>
                    </ServiceItemDescription>
                </ServiceCard>
                <ServiceCard>
                    <IconBg>
                        <Icon className="bi bi-hdd-rack"></Icon>
                    </IconBg>
                    <ServiceItemDescription>
                    <ServiceHeading>Back-End Development</ServiceHeading>
                    <p>Coding backen-end with Node JS, Mongo DB</p>
                    </ServiceItemDescription>
                </ServiceCard>
                <ServiceCard>
                    <IconBg>
                        <Icon className="bi bi-globe"></Icon>
                    </IconBg>
                    <ServiceItemDescription>
                    <ServiceHeading>Network Penetration Testing</ServiceHeading>
                        <p>Black Box Testing</p>
                        </ServiceItemDescription>
                </ServiceCard>
                <ServiceCard>
                    <IconBg>
                        <Icon className="bi bi-shield-check"></Icon>
                    </IconBg>
                    <ServiceItemDescription>
                    <ServiceHeading>Web Application Security Testing</ServiceHeading>
                    <p>Security Testing and Code Review</p>
                    </ServiceItemDescription>
                </ServiceCard>
            </ServiceList>
            <ServiceDescription>
                <h2>My Services</h2>
                <p>Bring your digital vision to life through a seamless fusion of creativity and functionality.</p>
                <p>I offer a range of services that elevate your online presence.</p>
                </ServiceDescription>
                </SectionWrapper>
        </StyledSection>
    )
}