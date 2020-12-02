import PropTypes from 'prop-types'


Campsites.propTypes = {
    campsites: PropTypes.arrayOf(PropTypes.array).isRequired
}

export default function Campsites({campsites}) {

    

    return (
        <div>
            {campsites.map(campsite => ( 
                <div key={campsite.id}>
                    <h2>{campsite.name}</h2>
                    <p>{campsite.street}</p>
                    <p>{campsite.postalCode} {campsite.place}</p>
                    <p>Tel: {campsite.telephone}</p>
                    <p>E-Mail: {campsite.email}</p>
                    {filterFeatures(campsite).map(feature => <li key={feature.id}>{feature.type}</li>)}
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


