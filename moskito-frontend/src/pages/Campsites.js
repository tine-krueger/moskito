import PropTypes from 'prop-types'
import CampsiteList from '../components/Campsitelist/CampsiteList'
import Header from '../components/Header/Header'
import Loading from '../components/Loading/Loading'
import Navigation from '../components/Navigation/Navigation'

Campsites.propTypes = {
    headline: PropTypes.string.isRequired,
    campsites: PropTypes.arrayOf(PropTypes.object).isRequired,
    errors: PropTypes.object,
    isLoading: PropTypes.bool.isRequired
}

export default function Campsites({headline, campsites, errors, isLoading}) {
    
    return (
        <>
            <Header children={headline}/>
            {isLoading ? <Loading/> : <CampsiteList isCampsite={true} campsites={campsites} errors={errors}/>}
            <Navigation/>
        </>
    )   
}
