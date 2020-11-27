import getCampsites from '../../services/getCampsites';
import { useState, useEffect } from 'react';

export default function Campsites() {
    const [campsites, setCampsites] = useState([])

    useEffect(() => {
        getCampsites()
        .then(data => {
            setCampsites(data)
            console.log(data)
        })
        
        .catch(error => console.log(error))
    }, [])


    return (
        <div>
            {campsites.map(campsite => ( 
                <div key={campsite.id}>
                    <h2>{campsite.name}</h2>
                    <p>{campsite.street}</p>
                    <p>{campsite.postalCode} {campsite.place}</p>
                    <p>Tel: {campsite.telephone}</p>
                    <p>E-Mail: {campsite.email}</p>
                    {filterFeatures(campsite).map(feature => <li>{feature.type}</li>)}
                </div>
                )
            )}
        </div>
    )

    function filterFeatures(campsite) {
        const features =  campsite.features.filter(feature => feature.value)
        return features
    }
}
