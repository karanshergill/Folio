import React from 'react'
import styled from 'styled-components'

const ServicesSection = styled.section.attrs({
    className: 'flex justify-center py-24 h-auto'
})``;

const ServicesWrapper = styled.div.attrs({
    className: 'flex flex-row gap-x-14 w-4/5'
})``;

const ServiceList = styled.div.attrs({ className: 'grid grid-cols-1 gap-6' })``;

const IconContainer = styled.div.attrs({
    className: 'flex items-center justify-center bg-zinc-700 text-white rounded-full w-14 h-14'
})``;

const Icon = styled.i.attrs({
    className: 'text-2xl'
})``;

const ServiceCard = styled.div.attrs({
    className: 'flex'
})``;

const ServiceItem = styled.div.attrs({
    className: 'flex flex-col pl-6 pt-0'
})``;

const ServiceHeading = styled.h3.attrs({
    className: 'text-lg font-medium text-zinc-900'
})``;

const ServiceDescription = styled.p.attrs({
    className: 'text-sm text-zinc-600'
})``;

const Line = styled.div.attrs({
    className: 'border-r border-zinc-400 h-64 mx-auto my-8'
})``;

const SectionHeading = styled.h2.attrs({
    className: 'text-3xl text-zinc-600 mb-10'
})``;

export const Services = () => {
    return (
        <ServicesSection>
            <ServicesWrapper>
                <ServiceList>
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
                </ServiceList>
                <Line></Line>
                <ServiceDescription>
                    <SectionHeading>Services</SectionHeading>
                    <p>Bring your digital vision to life through a seamless fusion of creativity and functionality.</p>
                    <p>I offer a range of services that elevate your online presence.</p>
                </ServiceDescription>
            </ServicesWrapper>
        </ServicesSection>
    )
}