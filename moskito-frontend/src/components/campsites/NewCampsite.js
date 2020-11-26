import { useState } from 'react';
import styled from 'styled-components';
import setCampsites from '../../services/setCampsites';



export default function NewCampsite() {
    const [newCampsite, setNewCampsite] = useState({
        name:'',
        street: '',
        postalCode: '',
        place: '',
        telephone: '',
        email: '',
        longitude: null,
        latitude: null,
        features: []
    })

    const [newFeatures, setFeatures] = useState([
        {
            name: 'wlan',
            isfeature: false
        },
        {
            name: 'music',
            isfeature: false
        },
        {
            name: 'animation',
            isfeature: false
        },
        {
            name: 'fire',
            isfeature: false
        },
        {
            name: 'path',
            isfeature: false
        },
        {
            name: 'bulli',
            isfeature: false
        },
        {
            name: 'tents',
            isfeature: false
        },
        {
            name: 'subdevision',
            isfeature: false
        },
        {
            name: 'permanent',
            isfeature: false
        },
        {
            name: 'size',
            isfeature: false
        },
        {
            name: 'bio',
            isfeature: false
        },
        {
            name: 'snack',
            isfeature: false
        },
        {
            name: 'animals',
            isfeature: false
        }
    ])
    return (
        <NewCampsiteForm onSubmit={handleSubmit}>
            <label>
                Name:
                <input 
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={newCampsite.name}
                />
            </label>
            <label>
                Straße + Nummer:
                <input 
                    type="text"
                    name="street"
                    onChange={handleChange}
                    value={newCampsite.street}
                />
            </label>
            <label>
                PLZ:
                <input 
                    type="text"
                    name="postalCode"
                    onChange={handleChange}
                    value={newCampsite.postalCode}
                />
            </label>
            <label>
                Ort:
                <input 
                    type="text"
                    name="place"
                    onChange={handleChange}
                    value={newCampsite.place}
                />
            </label>
            <label>
                Telefon:
                <input 
                    type="text"
                    name="telephone"
                    onChange={handleChange}
                    value={newCampsite.telephone}
                />
            </label>
            <label>
                E-Mail:
                <input 
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={newCampsite.email}
                />
            </label>
            <label>
                Latitude:
                <input 
                    type="number"
                    name="latitude"
                    onChange={handleChange}
                    value={newCampsite.latitude}
                />
            </label>
            <label>
                Longitude:
                <input 
                    type="number"
                    name="longitude"
                    onChange={handleChange}
                    value={newCampsite.longitude}
                />
            </label>
                
            {newFeatures.map((feature, index) => <label key={index}>
                {feature.name}:
                <input 
                    type="checkbox"
                    selected={newFeatures.wlan}
                    onChange={handleCheckboxChange}
                    name= {feature.name}
                />

            </label> )}
            <button onClick={handleClick}>Features bestätigen</button>
            <button>Campsite Anlegen</button>
        </NewCampsiteForm>
    )
    function handleClick(event) {
        event.preventDefault()
        setNewCampsite(
            {
                ...newCampsite,
                features: newFeatures
            })
    }

    function handleChange(event) {
        setNewCampsite(
            {
                ...newCampsite,
                [event.target.name]: event.target.value
            }
        )
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(newCampsite)
    }

    function handleCheckboxChange(event){
        const index = newFeatures.findIndex(feature => feature.name === event.target.name)
        const featureToChange = newFeatures[index]
        setFeatures(
            [
                ...newFeatures.slice(0, index), 
                {...featureToChange, isfeature: !featureToChange.isfeature}, //ändert das EINE Objekt in todos und fügt davor und dahinter das alte hinzu
                ...newFeatures.slice(index + 1)
            ]  
        )
    }
}

const NewCampsiteForm = styled.form`
    display: grid;
    gap: 1em;
`
