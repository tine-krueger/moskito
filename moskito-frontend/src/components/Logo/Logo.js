
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import moskitoLogo from '../../images/moskitoLogo.svg'

Logo.protoTypes = { inputMargin: PropTypes.string }

export default function Logo({inputMargin}) {
    return (
        <LogoStyled inputMargin={inputMargin}>
                <LogoImage src={moskitoLogo} alt="Moskito Logo"/>
        </LogoStyled>
    )
}

const LogoStyled = styled.div`
    margin-top: ${props => props.inputMargin || '8em'};
    text-align: center;
`

const LogoImage = styled.img`
    box-shadow: inset 4px 4px 6px 0 rgba(0,0,0,0.2), 
                inset -3px -4px 6px 0 rgba(255,255,255,0.3);
    border-radius: 20px;
    padding: 1em 2em;
    width: 85%;
`
