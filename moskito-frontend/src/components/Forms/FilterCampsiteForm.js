import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Feature from './FilterCampsiteCheckbox'
import Suggestions from './Suggestions'
import Button from '../Button/Button'
import InputField from './InputField'
import useForm from '../../hooks/useForm'
import getInitialCampsiteFilter from '../../services/getInitialCampsiteFilter'
import { getGeocode, autocomplete} from '../../services/getGeocode'


FilterCampsiteForm.propTypes = {
    getCampsites: PropTypes.func.isRequired
}

export default function FilterCampsiteForm({getCampsites}) {
    const initialFilter = getInitialCampsiteFilter()
    const { inputs, setInputs, handleChange, handleSubmit } = useForm(initialFilter, findCampsite) 
    const history = useHistory()
    const [ suggestions, setSuggestions ] = useState([])
    const [ errors, setErrors ] = useState()


    return (
        <FilterCampsite onSubmit={handleSubmit}>
            {errors && <p>{errors}</p>}
            <InputField data-testid='place' type={'text'} name={'postalCode'} value={inputs.postalCode} onChange={handleLocationChange} placeholder={inputs.name}>Dein Ziel:</InputField>
            {suggestions.length !== 0 && <Suggestions data-testid='place' suggestions={suggestions} onClick={handleClick}/> }
            <InputField type={'number'} name={'distance'} value={inputs.distance} onChange={handleChange} placeholder={inputs.distance}>Umkreis in km:</InputField>
            <h3>(Keine) Ausstattung:</h3>
            <Checkboxes>
                {initialFilter.features.map(feature => 
                        <Feature key={feature.id} feature={feature} filter={inputs} setFilter={setInputs} />
                    )}
            </Checkboxes>  
            <Button>Campingplätze finden</Button>
        </FilterCampsite>
    )

    function findCampsite(){
        getCampsites(inputs, setErrors)
        history.push('/campsites')
    }

    function handleClick(suggestion) {
        const place = suggestion.address.postalCode + " " + suggestion.address.city
        getGeocode(place)
        .then(result => {
            const geocodes = result.Response.View[0].Result[0].Location.DisplayPosition
            setInputs(
                {
                    ...inputs,
                    latitude: geocodes.Latitude,
                    longitude: geocodes.Longitude,
                    postalCode: place
                }
            )
        })
        .catch(() => 
            setSuggestions([
                { label: 'Ortsuche zu ungenau. Gib zusätzlich eine PLZ ein oder versuche es zu einem späteren Zeitpunkt nocheinmal.'}
            ]));
        setSuggestions([])
    }

    function handleLocationChange(event) {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        })
        inputs.postalCode.length > 2 ?
        autocomplete(inputs.postalCode)
        .then(results => setSuggestions(results.suggestions)) 
        .catch(() =>
          setSuggestions([
            { label: 'Service nicht verfügbar' },
          ])
        ) : setSuggestions([])
    }
}

const FilterCampsite = styled.form `
    max-width: 500px;
    display: grid;
    margin:2em 2em 3em 2em;

    h4 {
        padding-left: .5em;
        margin: 0 0 1em;
    }
`
const Checkboxes = styled.div`
    margin-top: 1em;
    padding-left: .5em;
`