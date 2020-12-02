import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import getInitialCampsiteFilter from '../../services/getInitialCampsiteFilter'
import PropTypes from 'prop-types'
import Feature from './FilterCampsiteCheckbox'

FilterCampsiteForm.propTypes = {
    getCampsites: PropTypes.func.isRequired
}

export default function FilterCampsiteForm({getCampsites}) {
    const initialFilter = getInitialCampsiteFilter()
    const [filter, setFilter] = useState(initialFilter)
    const history = useHistory()

    return (
        <FilterCampsite onSubmit={handleSubmit}>
            <PostalCodeInput>
                <input type="text" name='postalCode' value={filter.postalCode} onChange={handleChange} placeholder={initialFilter.name} />
            </PostalCodeInput>
            {initialFilter.features.map(feature => 
                    <Feature key={feature.id} feature={feature} filter={filter} setFilter={setFilter} />
                )}
            <button>Campingplätze finden</button>  
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
        routeChange()
    }

    function routeChange() {
        let path = '/campsites'
        history.push(path)
    }
}

const FilterCampsite = styled.form `
    padding: 1em 1em;
    display: grid;
    gap: 1em;
    grid-template-columns: 1fr 1fr;
`
const PostalCodeInput = styled.label `
    grid-column: 1 / -1;
    width: 90%;
    text-align: center;

    input {
        width: 100%;
        padding: .5em;
        border: none;
        border-radius: 10px;
        background-color: #d8e6e4;
        box-shadow: inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2), 
                    inset -3px -4px 6px 0 rgba(255, 255, 255, 0.3);
    }
    input:focus{
        outline: none;
        box-shadow: inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2), 
                    inset -3px -4px 6px 0 rgba(255, 255, 255, 0.3),
                    0 0 0px 1.7px #d3a392;
    }
`