import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import getInitialCampsiteFilter from '../../services/getInitialCampsiteFilter'
import PropTypes from 'prop-types'

FilterCampsite.propTypes = {
    getCampsites: PropTypes.func.isRequired
}

export default function FilterCampsite({getCampsites}) {
    const initialFilter = getInitialCampsiteFilter()
    const [filter, setFilter] = useState(initialFilter)
    const history = useHistory()

    

    return (
        <>
        <CampsiteFilter onSubmit={handleSubmit}>
            <PostalCodeInput>
                {initialFilter.name}:
                <input type="text" name='postalCode' value={filter.postalCode} onChange={handleChange} />
            </PostalCodeInput>
            {initialFilter.features.map(feature => 
                    <Feature htmlFor={feature.dbName} key={feature.id}>
                        <input 
                            id={feature.dbName}
                            type="checkbox"
                            defaultChecked={feature.isFeature}
                            onChange={handleCheckboxChange}
                        />
                        <p>{feature.name}</p>
                    </Feature>
                )}
            <button>Campingplätze finden</button>  
        </CampsiteFilter>
        </>
    )

    function handleChange(event) {
        setFilter({
            ...filter,
            [event.target.name]: event.target.value
        })
        console.log(filter)
    }

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

    function handleSubmit(event){
        event.preventDefault()
        getCampsites(filter)
        routeChange()
    }
    function routeChange() {
        let path = '/campsites'
        history.push(path)
    }
}

const CampsiteFilter = styled.form `
    display: grid;
    gap: 1em;
    grid-template-columns: 1fr 1fr;
`
const PostalCodeInput = styled.label `
    grid-column: 1 / -1;
    input {
        width: 80%;
    }
`
const Feature = styled.label `
    display: grid;
    grid-template-columns: 20% 1fr;
    p {
        margin: 0;
    }
`