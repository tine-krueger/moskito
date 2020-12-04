import PropTypes from 'prop-types'
import FilterCampsite from '../Components/Forms/FilterCampsiteForm'
import Header from '../Components/Header/Header'

FindCampsitesPages.propTypes = {
    getCampsites: PropTypes.func.isRequired
}

export default function FindCampsitesPages({getCampsites}) {

    return (
        <>
            <Header children={'Was Du willst'}/>
            <FilterCampsite getCampsites={getCampsites}/>
        </>
    )   
}

