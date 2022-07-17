import styled, { css, keyframes } from 'styled-components'

export const Title = styled.h1`
    margin-top: -50vh;
    opacity: 0;
    text-shadow: 2px 2px 2px #867864;
    transition-duration: 4s;
    z-index: 2;
    transition-timing-function: easy;
    ${props => props.transition && `
        margin-top: -10vh;
        opacity: 1;
    `}
`

export const Links = styled.div`
    margin-top: 150vh;
    position: absolute;
    opacity: 0;
    text-shadow: 1px 2px 4px #867864;
    transition-duration: 5s;
    z-index: 2;
    transition-timing-function: easy;
    ${props => props.transition && `
        margin-top: 14vh;
        opacity: 1;
    `}
`

export const LeftLine = styled.div`
    position: absolute;
    width: 1vw;
    margin-right: -80vw;
    height: 0.3vh;
    opacity: 0;
    box-shadow: 1px 1px 3px #867864;
    background: #26292B;
    margin-top: 2vh;
    transition-duration: 7s;
    transition-timing-function: easy;
    ${props => props.transition && `
        width: 45vw;
        margin-right: 30vw;
        opacity: 1;
    `}
`
export const RightLine = styled.div`
    position: absolute;
    width: 1vw;
    margin-left: -80vw;
    height: 0.3vh;
    opacity: 0;
    box-shadow: 1px 1px 3px #867864;
    margin-top: 2vh;
    background: #26292B;
    transition-duration: 7s;
    transition-timing-function: easy;
    ${props => props.transition && `
        width: 45vw;
        margin-left: 30vw;
        opacity: 1;
    `}
`

export const Circle = styled.div`
    position: absolute;
    display: flex;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    height: auto;
    margin-top: -40vh;
    margin-left: -140vw;
    transition-duration: 3s;
    opacity: 0;
    transition-timing-function: ease-in-out;
    transition-delay: 1s;
    &:nth-child(6) {
        transition-duration: 4s;
        margin-left: 140vw;
        margin-top: 30vh;
    }
    &:nth-child(7) {
        transition-duration: 5s;
        margin-left: -140vw;
        margin-top: 65vh;
    }
    &:last-child {
        transition-duration: 6s;
        margin-left: 140vw;
        margin-top: -70vh;
    }
    ${props => props.transition && `
        margin-left: 175vw;
        opacity: 0.5;
        &:nth-child(6) {
            opacity: 0.3;
            margin-left: -160vw;
        }
        &:nth-child(7) {
            opacity: 0.7;
            margin-left: 150vw;
        }
        &:last-child {
            opacity: 0.6;
            margin-left: -140vw;
        }
    `}
`