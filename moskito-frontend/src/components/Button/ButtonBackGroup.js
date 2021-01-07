import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from "./Button";

ButtonBackGroup.propTypes = {
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default function ButtonBackGroup({text1, text2, onClick}) {
    return (
        <Buttons>
            <Button >{text1}</Button>
            <Button data-testid="no-form-button" type="button" onClick={onClick}>{text2}</Button>
        </Buttons>
    )
}

const Buttons = styled.div`
    display: grid;
    justify-items: center;
    Button {
        margin: .5em;
        width: 10em;
    }
`