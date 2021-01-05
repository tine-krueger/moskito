import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

InputField.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string,
    value: PropTypes.node,
    onChange: PropTypes.func,
    placeholder: PropTypes.node,
    children: PropTypes.string,
    marginBottom: PropTypes.string
}

export default function InputField({type, name, value, onChange, placeholder, children, marginBottom}) {
    return (
        <Label data-testid='input-field' lessMargin={marginBottom}>
            <h3>{children}</h3>
            <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
        </Label>
    )
}

const Label = styled.label `
    grid-column: 1 / -1;
    width: 100%;
    text-align: center;
    margin: 0 auto 2em;
    margin-bottom: ${(props) => props.lessMargin === 'sm' ? '.5em' : '1em'};
    h3 {
        text-align: left;
        padding-left: .5em;
        margin: 0 0 1em;
    }

    input {
        width: 100%;
        padding: 1em;
        height: 3em;
        font-size: 1em;
        border: none;
        border-radius: 10px;
        color: #6b717e;
        background-color: #d8e6e4;
        box-shadow: inset 4px 4px 6px 0 rgba(0,0,0,0.2), inset -3px -4px 6px 0 rgba(255,255,255,0.3);
    }
    input:focus{
        outline: none;
        box-shadow: inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2), 
                    inset -3px -4px 6px 0 rgba(255, 255, 255, 0.3),
                    0 0 0px 1.7px #d3a392;
    }
`
