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
    border-radius: 10px;
    width: auto;
    border: none;
    background: #c2d6d3;
    box-shadow: 2px 4px 8px -4px rgba(0,0,0,0.6), 
                -2px -2px 2px 0px rgba(255,255,255,0.5);
    color: #476c85;
    text-transform: uppercase;
    margin: 3em auto;

    &:hover{
        background: linear-gradient(145deg, #A2B2B0, #E2FAF6);
        box-shadow: 2px 4px 8px -4px rgba(0,0,0,0.6), 
                -2px -2px 2px 0px rgba(255,255,255,0.5);
        outline: none;
    }
`
