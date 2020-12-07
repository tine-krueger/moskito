import PropTypes from 'prop-types'
import CampsiteList from '../Components/Campsitelist/CampsiteList'
import Header from '../Components/Header/Header'
import Navigation from '../Components/Navigation/Navigation'


Campsites.propTypes = {
    campsites: PropTypes.arrayOf(PropTypes.array).isRequired
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


