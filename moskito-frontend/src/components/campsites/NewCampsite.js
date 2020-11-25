import { useState } from 'react';
import setCampsites from '../../services/setCampsites';


export default function NewCampsite() {
    const [newCampsite, setNewCampsite] = useState({
        name:'',
        street: '',
        postalCode: '',
        place: '',
        telephone: '',
        email: '',
        coordinates: []
    })
    return (
        <form onSubmit={handleSubmit}>
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
                Koordinaten:
                <input 
                    type="text"
                    name="coordinates"
                    onChange={handleChange}
                    value={newCampsite.coordinates}
                />
            </label>
            <button>Anlegen</button>
        </form>
    )

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
        setCampsites({newCampsite})
    }
}
