import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

InputField.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string,
    value: PropTypes.node,
    onChange: PropTypes.func,
    placeholder: PropTypes.node,
    children: PropTypes.node,
    marginBottom: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    autocomplete: PropTypes.string
}

export default function InputField({
    type, 
    name, 
    value, 
    onChange, 
    placeholder, 
    children, 
    marginBottom, 
    min, 
    max, 
    autocomplete
}) {

    return (
        <Label data-testid='input-field' lessMargin={marginBottom}>
            <h3>{children}</h3>
            <input 
            data-testid={name} 
            type={type} 
            name={name} 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder} 
            min={min} 
            max={max} 
            autoComplete={autocomplete} 
            />
        </Label>
    )
}

const Label = styled.label `
    grid-column: 1 / -1;
    width: 100%;
    text-align: center;
    margin: 0 auto 2em;
    margin-bottom: ${props => props.lessMargin === 'sm' ? '.5em' : '1em'};
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

    input[type=range] {
        width: 100%;
        margin: 4.05px 0;
        background-color: transparent;
        -webkit-appearance: none;
        box-shadow: none;
      }
      input[type=range]:focus {
        outline: none;
        box-shadow: none;
      }
      input[type=range]::-webkit-slider-runnable-track {
        background: var(--background-light);
        border: 0;
        border-radius: 25px;
        width: 100%;
        height: 1.5em;
        cursor: pointer;
        box-shadow: inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2), 
        inset -3px -4px 6px 0 rgba(255, 255, 255, 0.3);
      }
      input[type=range]::-webkit-slider-thumb {
        margin-top: -4.05px;
        width: 2em;
        height: 2em;
        background: var(--link);
        border: 0;
        border-radius: 2em;
        cursor: pointer;
        -webkit-appearance: none;
        box-shadow: 1.5px 1.5px 4px -1px rgba(0,0,0,0.6), -1px -1px 2px 0px rgba(255,255,255,0.5);
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        background: var(--background-light);
      }
      input[type=range]::-moz-range-track {
        background: var(--background-light);
        border: 0;
        border-radius: 25px;
        width: 100%;
        height: 1.5em;
        cursor: pointer;
        box-shadow: inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2), 
        inset -3px -4px 6px 0 rgba(255, 255, 255, 0.3);
      }
      input[type=range]::-moz-range-thumb {
        width: 2em;
        height: 2em;
        background: var(--link);
        border: 0;
        border-radius: 2em;
        cursor: pointer;
        box-shadow: 1.5px 1.5px 4px -1px rgba(0,0,0,0.6), -1px -1px 2px 0px rgba(255,255,255,0.5);
      }
      input[type=range]::-ms-track {
        background: transparent;
        border-color: transparent;
        border-width: 9.65px 0;
        color: transparent;
        width: 100%;
        height: 1.5em;
        cursor: pointer;
        box-shadow: inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2), 
        inset -3px -4px 6px 0 rgba(255, 255, 255, 0.3);
      }
      input[type=range]::-ms-fill-lower {
        background: var(--background-light);
        border: 0;
        border-radius: 50px;
      }
      input[type=range]::-ms-fill-upper {
        background: var(--background-light);
        border: 0;
        border-radius: 50px;
      }
      input[type=range]::-ms-thumb {
        width: 2em;
        height: 2em;
        background: var(--link);
        border: 0;
        border-radius: 2em;
        cursor: pointer;
        margin-top: 0px;
        box-shadow: 1.5px 1.5px 4px -1px rgba(0,0,0,0.6), -1px -1px 2px 0px rgba(255,255,255,0.5);
      }
      input[type=range]:focus::-ms-fill-lower {
        background: var(--background-light);
      }
      input[type=range]:focus::-ms-fill-upper {
        background: var(--background-light);
      }
     
      @supports (-ms-ime-align:auto) {
        input[type=range] {
          margin: 0;
        }
      }

`
