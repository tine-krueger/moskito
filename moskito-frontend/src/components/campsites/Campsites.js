import getCampsites from '../../services/getCampsites';
import { useState, useEffect } from 'react';

export default function Campsites() {
    const [campsites, setCampsites] = useState([])

    useEffect(() => {
        getCampsites()
        .then(data => setCampsites(data))
        .catch(error => console.log(error))
    }, [])


    return (
        <div>
            {campsites.map(({id, name, street, postalCode, place, telephone, email, coordinates}) => (
                <div key={id}>
                    <h2>{name}</h2>
                    <p>{street}</p>
                    <p>{postalCode} {place}</p>
                    <p>Tel: {telephone}</p>
                    <p>E-Mail: {email}</p>
                    <p>Koordinaten: {coordinates}</p>
                </div>
                )
            )}
        </div>
    )
}
