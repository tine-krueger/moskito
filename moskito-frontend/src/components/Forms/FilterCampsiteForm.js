import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Feature from './FilterCampsiteCheckbox'
import Suggestions from './FormElements/Suggestions'
import Button from '../Button/Button'
import InputField from './FormElements/InputField'
import campsiteBasisData from '../../data/campsiteBasisData.json'
import { useFilterForm } from '../../hooks/useFilterForm'

FilterCampsiteForm.propTypes = {
    getCampsites: PropTypes.func.isRequired
}

export default function FilterCampsiteForm({getCampsites}) {
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

    return (
        <FilterCampsite onSubmit={handleSubmit}>

            <InputField 
            type={'text'} 
            name={'postalCode'}
            value={inputs.postalCode} 
            onChange={handleLocationChange} 
            placeholder={inputs.name}
            autocomplete={'off'}
            >Dein Ziel:</InputField>

            {suggestions.length !== 0 && <Suggestions 
            data-testid='suggestions' 
            suggestions={suggestions} 
            onClick={handleClick}
            /> }

            <InputField 
            type={'range'}
            name={'distance'}
            min={5}
            max={200}
            value={inputs.distance} 
            onChange={handleChange} 
            >Umkreis in km: {inputs.distance}</InputField>
            
            <h3>(Keine) Ausstattung:</h3>
            <Checkboxes>
                {campsiteBasisData.features.map(feature => 
                        <Feature key={feature.id} feature={feature} setFilter={handleCheckboxChange} />
                    )}
            </Checkboxes>  
            <Button>Campingplätze finden</Button>
        </FilterCampsite>
    )

    function findCampsite(){
        getCampsites(inputs)
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