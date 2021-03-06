import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

FilterCampsiteCheckbox.propTypes = {
    feature: PropTypes.object.isRequired,
    setFilter: PropTypes.func.isRequired
}

export default function FilterCampsiteCheckbox({feature, setFilter}) {
    return (
        <Feature key={feature.id} >
            <input 
            id={feature.dbName}
            name={feature.dbName}
            type="checkbox"
            defaultChecked={feature.isFeature}
            onChange={setFilter}
            data-testid={feature.dbName}
            />
            <label htmlFor={feature.dbName}>
                <p>{feature.name}</p>
            </label>
        </Feature >
    )
}

const Feature = styled.div `
    position: relative;
    height: 2.5em;
    margin-bottom: .75em;
    input[type="checkbox"] {
        opacity: 0;
        position: absolute;
        visibility:hidden;
    }

    p {
        margin: 0;
        padding: .1em 0 0 2.5em;
        font-size: 1.1em;
    }

    p::before {
        content: " ";
        display: inline-block;
        position: absolute;
        width: 25px;
        height: 25px;
        left: 0;
        top: 0;
        -webkit-transition: all .2s ease;
        transition: all .2s ease;
        border-radius: 5px;
        background-color: var(--background-light);
        box-shadow: inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2), 
                    inset -3px -4px 6px 0 rgba(255, 255, 255, 0.3);
    }

    p::after {
        content: " ";
        width: 14px;
        height: 14px;
        top: 6px;
        position: absolute;
        opacity: 0;
        background-color: var(--link);
        font-weight: 900;
        border-radius: 2px;
        display: inline-block;
        left: 6px;
    }

    input[type="checkbox"]:checked+label>p::after {
        opacity: 1;
    } 

    input[type="checkbox"]:checked+label>p::before {
        box-shadow: inset 5px 5px 3px -3px rgba(0,0,0,0.2), 
                    inset -3px -4px 6px 0 rgba(255,255,255,.9);
    }
`
