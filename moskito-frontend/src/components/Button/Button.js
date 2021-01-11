import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default function Button({children, onClick}) {
    
    return (
        <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    padding: 1em 2em;
    font-family: 'Arvo';
    font-size: 1.1rem;
    border-radius: 10px;
    width: auto;
    border: none;
    background: var(--background);
    box-shadow: 2px 4px 8px -4px rgba(0,0,0,0.6), 
                -2px -2px 2px 0px rgba(255,255,255,0.5);
    color: var(--headline);
    text-transform: uppercase;
    margin: 1em auto 3em auto;

    &:hover{
        box-shadow: inset 4px 4px 6px 0 rgba(0,0,0,0.2), 
                inset -3px -4px 6px 0 rgba(255,255,255,0.3);
        outline: none;
    }
`
