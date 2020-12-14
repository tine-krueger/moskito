import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Feature from './FilterCampsiteCheckbox'
import Button from '../Button/Button'
import InputField from './InputField'
import useForm from '../../hooks/useForm'
import getInitialCampsiteFilter from '../../services/getInitialCampsiteFilter'
import {getGeocode, autocomplete} from '../../services/getGeocode'

FilterCampsiteForm.propTypes = {
    getCampsites: PropTypes.func.isRequired
}

export default function FilterCampsiteForm({getCampsites}) {
    const initialFilter = getInitialCampsiteFilter()
    const { fields, setValues, handleChange } = useForm(initialFilter)
    const history = useHistory()
    const [ suggestions, setSuggestions ] = useState([])


    return (
        <FilterCampsite onSubmit={handleSubmit}>
            <InputField type={'text'} name={'postalCode'} value={fields.postalCode} onChange={handleLocationChange} placeholder={fields.name}/>
            {suggestions.length !== 0 && <ul> {suggestions.map((suggestion, index) => <li key={index} onClick={() => handleClick(suggestion)}>{suggestion.label}</li>)}</ul>}
            <InputField type={'number'} name={'distance'} value={fields.distance} onChange={handleChange} placeholder={fields.distance}/>
            <Checkboxes>
                {initialFilter.features.map(feature => 
                        <Feature key={feature.id} feature={feature} filter={fields} setFilter={setValues} />
                    )}
            </Checkboxes>  
            <Button>Campingplätze finden</Button>
        </FilterCampsite>
    )

    function handleSubmit(event){
        event.preventDefault()
        getCampsites(fields)
        history.push('/campsites')
    }

    function handleClick(suggestion) {
        const place = suggestion.address.postalCode + " " + suggestion.address.city
        getGeocode(place)
        .then(result => {
            const geocodes = result.Response.View[0].Result[0].Location.DisplayPosition
            setValues(
                {
                    ...fields,
                    latitude: geocodes.Latitude,
                    longitude: geocodes.Longitude,
                    postalCode: place
                }
            )
        })
        .catch(error => console.log('error', error));
        setSuggestions([])
        console.log(fields)
    }

    function handleLocationChange(event) {

        setValues({
            ...fields,
            [event.target.name]: event.target.value
        })
        fields.postalCode.length > 2 && autocomplete(fields.postalCode)
        .then(results => {
            setSuggestions(results.suggestions)
            console.log(results)}) 
        .catch(() =>
          setSuggestions([
            { description: 'Service nicht verfügbar', googlePlaceId: 'error' },
          ])
        )
        console.log(suggestions)
    }
}

const FilterCampsite = styled.form `
    max-width: 500px;
    display: grid;
    margin:2em 2em 5em 2em;
`
const Checkboxes = styled.div`
    padding: 0 1em;
    display: grid;
    gap: 1em 1em;
    grid-template-columns: 1fr 1fr;
`