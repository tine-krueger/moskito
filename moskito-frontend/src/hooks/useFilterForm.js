import { useState } from 'react' 
import { getGeocode, autocomplete} from '../services/getGeocode'
import getInitialCampsiteFilter from '../services/getInitialCampsiteFilter'

export function useFilterForm(callback) {
    const initialFilter = getInitialCampsiteFilter()
    const [ inputs, setInputs ] = useState(initialFilter)
    const [ suggestions, setSuggestions ] = useState([])
    
    return { inputs, suggestions, handleChange, handleSubmit, handleClick, handleLocationChange, handleCheckboxChange }
    
    function handleChange(event) {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        callback()
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

    function handleCheckboxChange(event) {
        const index = inputs.features.findIndex(feature =>feature.dbName === event.target.id)
        const featureToChange = inputs.features[index]
        setInputs({
            ...inputs,
            features: [
                ...inputs.features.slice(0,index),
                {...featureToChange,  isFeature: !featureToChange.isFeature},
                ...inputs.features.slice(index + 1)
            ]
        })
    }
}