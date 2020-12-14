import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Feature from './FilterCampsiteCheckbox'
import Button from '../Button/Button'
import InputField from './InputField'
import useForm from '../../hooks/useForm'
import getInitialCampsiteFilter from '../../services/getInitialCampsiteFilter'
import getGeocode from '../../services/getGeocode'

FilterCampsiteForm.propTypes = {
    getCampsites: PropTypes.func.isRequired
}

export default function FilterCampsiteForm({getCampsites}) {
    const initialFilter = getInitialCampsiteFilter()
    const { fields, setValues, handleChange } = useForm(initialFilter)
    const history = useHistory()

    return (
        <FilterCampsite onSubmit={handleSubmit}>
            <InputField type={'text'} name={'postalCode'} value={fields.postalCode} onChange={handleChange} onBlur={handleBlur} placeholder={initialFilter.name}/>
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

    function handleBlur() {
        getGeocode(fields.postalCode)
        .then(result => {
            const geocodes = result.Response.View[0].Result[0].Location.DisplayPosition
            setValues(
                {
                    ...fields,
                    latitude: geocodes.Latitude,
                    longitude: geocodes.Longitude
                }
            )
        })
        .catch(error => console.log('error', error));
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