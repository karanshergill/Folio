import React from 'react'
import styled from 'styled-components'

const FlexWrapper = styled.div.attrs({
    className: 'flex justify-center items-center gap-4'
})``;

const Icon = styled.span.attrs({
    className: 'text-1xl text-zinc-800 hover:text-zinc-600 cursor-pointer'
})``;

const Linkedin = styled.i.attrs({
    className: 'bi bi-linkedin'
})``;

const Twitter = styled.i.attrs({
    className: 'bi bi-twitter'
})``;

const Github = styled.i.attrs({
    className: 'bi bi-github'
})``;

const Instagram = styled.i.attrs({
    className: 'bi bi-instagram'
})``;

export const Socials = () => {
    return (
        <FlexWrapper>
            <a href=""><Icon><Linkedin></Linkedin></Icon></a>
            <a href=""><Icon><Twitter></Twitter></Icon></a>
            <a href=""><Icon><Github></Github></Icon></a>
            <a href=""><Icon><Instagram></Instagram></Icon></a>
        </FlexWrapper>
    )
}
