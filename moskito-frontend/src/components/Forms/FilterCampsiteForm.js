import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Feature from './FilterCampsiteCheckbox'
import Suggestions from './FormElements/Suggestions'
import Button from '../Button/Button'
import InputField from './FormElements/InputField'
import getInitialCampsiteFilter from '../../services/getInitialCampsiteFilter' // weg
import useFilterForm from '../../hooks/useFilterForm'

FilterCampsiteForm.propTypes = {
    getCampsites: PropTypes.func.isRequired
}

export default function FilterCampsiteForm({getCampsites}) {
    const initialFilter = getInitialCampsiteFilter()
    const {
        inputs, 
        suggestions, 
        handleChange, 
        handleClick, 
        handleSubmit, 
        handleLocationChange,
        handleCheckboxChange
    } = useFilterForm(findCampsite)
    const history = useHistory()
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
                        <Feature key={feature.id} feature={feature} setFilter={handleCheckboxChange} />
                    )}
            </Checkboxes>  
            <Button>Campingplätze finden</Button>
        </FilterCampsite>
    )

    function findCampsite(){
        getCampsites(inputs, setErrors)
        history.push('/campsites')
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