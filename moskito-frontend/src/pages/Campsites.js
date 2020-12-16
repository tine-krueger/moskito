import PropTypes from 'prop-types'
import CampsiteList from '../components/Campsitelist/CampsiteList'
import Header from '../components/Header/Header'
import Navigation from '../components/Navigation/Navigation'

Campsites.propTypes = {
    headline: PropTypes.string.isRequired,
    campsites: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default function Campsites({headline, campsites}) {
    
    return (
        <>
            <Header children={headline}/>
            <CampsiteList campsites={campsites}/>
            <Navigation/>
        </>
    )   
}
