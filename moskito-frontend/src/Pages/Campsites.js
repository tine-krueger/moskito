import PropTypes from 'prop-types'
import CampsiteList from '../Components/Campsitelist/CampsiteList'
import Header from '../Components/Header/Header'


Campsites.propTypes = {
    campsites: PropTypes.arrayOf(PropTypes.array).isRequired
}

export default function Campsites({campsites}) {

    return (
        <>
            <Header children={'findest Du hier'}/>
            <CampsiteList campsites={campsites}/>
        </>
    )   
}


