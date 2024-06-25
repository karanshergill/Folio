import React from 'react'
import styled from 'styled-components';

const Section = styled.section.attrs({
    className: 'flex flex-col justify-center items-center mt-10 mb-20 w-full'
})``;

const HeadingWrapper = styled.div.attrs({
    className: 'flex flex-col items-center'
})``;

const Heading = styled.h2.attrs({
    className: 'text-3xl text-zinc-600'
})``;

const SubHeading = styled.p.attrs({
    className: 'flex flex-col items-center text-sm text-zinc-600 mt-5'
})``;

const Gallery = styled.div.attrs({
    className: 'flex gap-10 py-10'
})``;

const ImageWrapper = styled.div.attrs({
    className: 'flex items-center flex-col gap-5'
})``;

const Image = styled.img.attrs({
    className: 'rounded-xl'
})``;


export const Portfolio = () => {
    return (
        <Section>
            <HeadingWrapper>
                <Heading>Portfolio</Heading>
                <SubHeading>Have a look at my portfolio</SubHeading>
            </HeadingWrapper>
            <Gallery>
                <ImageWrapper>
                    <Image src="https://picsum.photos/350/250" alt="" />
                    <p>Personal Portfolio</p>
                </ImageWrapper>
                <ImageWrapper>
                    <Image src="https://picsum.photos/seed/picsum/350/250" alt="" />
                    <p>Digital Marketig Agency</p>
                </ImageWrapper>
                                <ImageWrapper>
                    <Image src="https://picsum.photos/350/250" alt="" />
                    <p>Fast E-Commerce</p>
                </ImageWrapper>
            </Gallery>
        </Section>
    )
}
