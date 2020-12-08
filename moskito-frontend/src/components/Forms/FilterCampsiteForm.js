import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Feature from './FilterCampsiteCheckbox'
import Button from '../Button/Button'
import InputField from './InputField'
import getInitialCampsiteFilter from '../../services/getInitialCampsiteFilter'

FilterCampsiteForm.propTypes = {
    getCampsites: PropTypes.func.isRequired
}

export default function FilterCampsiteForm({getCampsites}) {
    const initialFilter = getInitialCampsiteFilter()
    const [filter, setFilter] = useState(initialFilter)
    const history = useHistory()

    return (
        <FilterCampsite onSubmit={handleSubmit}>
            <InputField type={'text'} name={'postalCode'} value={filter.postalCode} onChange={handleChange} placeholder={initialFilter.name}/>
            <Checkboxes>
                {initialFilter.features.map(feature => 
                        <Feature key={feature.id} feature={feature} filter={filter} setFilter={setFilter} />
                    )}
            </Checkboxes>  
            <Button>Campingplätze finden</Button>
        </FilterCampsite>
    )

    function handleChange(event) {
        setFilter({
            ...filter,
            [event.target.name]: event.target.value
        })
        console.log(filter)
    }

    function handleSubmit(event){
        event.preventDefault()
        getCampsites(filter)
        history.push('/campsites')
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