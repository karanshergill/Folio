import React from 'react'
import styled from 'styled-components'

const Heading = styled.h1.attrs({
    className: 'text-3xl text-center text-zinc-700 pb-10'
})``;

const FlexWrapper = styled.div.attrs({
    className: "flex justify-center items-center"
})``;

const GridContainer = styled.div.attrs({
    className: "grid grid-cols-[1fr_1px_1fr] max-w-5xl"
})``;

const ItemLeft = styled.div.attrs({
    className: 'justify-self-start place-self-center mr-10 mt-5 mb-5'
})``;

const ItemRight = styled.div.attrs({
    className: 'justify-self-start place-self-center ml-10 mt-5 mb-5'
})``;

const Bar = styled.div.attrs({
    className: 'flex justify-center items-center bg-yellow-500'
})``;

const Bullet = styled.div.attrs({
    className: 'bg-zinc-600 rounded-full h-4 w-4 absolute'
})``;

const Description = styled.small.attrs({
    className: 'text-zinc-700'
})``;

export const Timeline = ({ events }) => {
    return (
            <section className='mt-10'>
                <Heading>
                    Education & Work
                </Heading>
                {events.map((event, index) => (
                    <FlexWrapper>
                        <GridContainer key={index}>
                            <ItemLeft>
                                <h1>{event.heading}</h1>
                                <small>{event.date}</small>
                            </ItemLeft>
                            <Bar>
                                <Bullet></Bullet>
                            </Bar>
                            <ItemRight>
                                <h1>{event.milestone.heading}</h1>
                                <Description>{event.milestone.description}</Description>
                            </ItemRight>
                        </GridContainer>
                    </FlexWrapper>
                ))}
            </section>
    )
}