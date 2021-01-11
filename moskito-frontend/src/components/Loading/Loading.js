import styled, { keyframes } from 'styled-components/macro'

export default function Loading() {
    return(
        <Spinner data-testid={'loading-spinner'}/>
    )
}

const spinn = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const Spinner = styled.div`
    overflow: hidden;
    font-size: 10px;
    margin: 50px auto;
    text-indent: -9999em;
    width: 11em;
    height: 11em;
    border-radius: 50%;
    background: var(--link);
    background: linear-gradient(to right, var(--link) 10%, rgba(255, 255, 255, 0) 42%);
    position: relative;
    animation: ${spinn} 1.4s infinite linear;
    transform: translateZ(0);

    :before {
        width: 50%;
        height: 50%;
        background: var(--link);
        border-radius: 100% 0 0 0;
        position: absolute;
        top: 0;
        left: 0;
        content: '';
    }

    :after {
        background: var(--headline);
        width: 75%;
        height: 75%;
        border-radius: 50%;
        content: '';
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        opacity: 0.5;
    }
`