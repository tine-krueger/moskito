import PropTypes from 'prop-types'
import FilterCampsite from '../components/Forms/FilterCampsiteForm'
import Header from '../components/Header/Header'
import Navigation from '../components/Navigation/Navigation'

FindCampsitesPages.propTypes = {
    getCampsites: PropTypes.func.isRequired
}

export default function FindCampsitesPages({getCampsites, headline}) {

    return (
        <>
            <Header children={headline}/>
            <FilterCampsite getCampsites={getCampsites}/>
            <Navigation/>
        </>
    )   
}
