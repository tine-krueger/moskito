import PropTypes from 'prop-types'
import CampsiteList from '../components/Campsitelist/CampsiteList'
import Header from '../components/Header/Header'
import Navigation from '../components/Navigation/Navigation'
import { useEffect } from 'react'
import useCampsites from '../hooks/useCampsites'


Campsites.propTypes = {
    headline: PropTypes.string.isRequired
}

export default function Campsites({headline}) {
    const { bookmarks, getBookmarks } = useCampsites()

    useEffect(() => {
        getBookmarks()        
    }, [])
    
    return (
        <>
            <Header children={headline}/>
            <CampsiteList campsites={bookmarks}/>
            <Navigation/>
        </>
    )   
}