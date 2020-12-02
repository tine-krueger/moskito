import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

FilterCampsiteCheckbox.propTypes = {
    feature: PropTypes.object.isRequired,
    filter: PropTypes.object.isRequired,
    setFilter: PropTypes.func.isRequired
}

export default function FilterCampsiteCheckbox({feature, filter, setFilter}) {
    return (
        <Feature key={feature.id} >
            <input 
                id={feature.dbName}
                type="checkbox"
                defaultChecked={feature.isFeature}
                onChange={handleCheckboxChange}
            />
            <label htmlFor={feature.dbName}>
                <p>{feature.name}</p>
            </label>
        </Feature >
    )

    function handleCheckboxChange(event) {
        const index = filter.features.findIndex(feature =>feature.dbName === event.target.id)
        const featureToChange = filter.features[index]
        setFilter({
            ...filter,
            features: [
                ...filter.features.slice(0,index),
                {...featureToChange,  isFeature: !featureToChange.isFeature},
                ...filter.features.slice(index + 1)
            ]
        })
    }
}

const Feature = styled.label `
    position: relative;
    input[type="checkbox" i] {
        display: none;
    }

    p {
        margin: 0;
        padding-left: 2em;
    }

    p::before {
        content: " ";
        display: inline-block;
        position: absolute;
        width: 20px;
        height: 20px;
        left: 0;
        top: 0;
        -webkit-transition: all .2s ease;
        transition: all .2s ease;
        border-radius: 5px;
        background-color: #d8e6e4;
        box-shadow: inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2), 
                    inset -3px -4px 6px 0 rgba(255, 255, 255, 0.3);
    }
`
