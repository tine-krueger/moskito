import PropTypes from 'prop-types'
import CampsiteList from '../components/Campsitelist/CampsiteList'
import Header from '../components/Header/Header'
import Navigation from '../components/Navigation/Navigation'


Campsites.propTypes = {
    campsites: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default function Campsites({campsites}) {

    return (
        <>
            <Header children={'Deine Suche'}/>
            <CampsiteList campsites={campsites}/>
            <Navigation/>
        </>
    )   
}


