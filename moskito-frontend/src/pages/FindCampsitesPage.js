import PropTypes from 'prop-types'
import { useEffect } from 'react'
import FilterCampsite from '../components/Forms/FilterCampsiteForm'
import Header from '../components/Header/Header'
import Navigation from '../components/Navigation/Navigation'


FindCampsitesPages.propTypes = {
    getCampsites: PropTypes.func.isRequired,
    headline: PropTypes.string.isRequired,
    setLoading: PropTypes.func.isRequired
}

export default function FindCampsitesPages({getCampsites, headline, setLoading}) {
    useEffect(() => {
        setLoading(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <>
            <Header children={headline}/>
            <FilterCampsite getCampsites={getCampsites}/>
            <Navigation/>
        </>
    )   
}
