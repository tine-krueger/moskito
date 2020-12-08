import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

InputField.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string,
    value: PropTypes.node,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
}

export default function InputField({type, name, value, onChange, placeholder}) {
    return (
        <Label>
            <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
        </Label>
    )
}

const Label = styled.label `
    grid-column: 1 / -1;
    width: 100%;
    text-align: center;
    margin: 0 auto 2em;

    input {
        width: 100%;
        padding: 1.5em;
        border: none;
        border-radius: 10px;
        color: #6b717e;
        background-color: #d8e6e4;
        box-shadow: inset 4px 4px 6px 0 rgba(0,0,0,0.2), inset -3px -4px 6px 0 rgba(255,255,255,0.3);
        height: 3em;
    }
    input:focus{
        outline: none;
        box-shadow: inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2), 
                    inset -3px -4px 6px 0 rgba(255, 255, 255, 0.3),
                    0 0 0px 1.7px #d3a392;
    }
`
