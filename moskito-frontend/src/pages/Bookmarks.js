import PropTypes from 'prop-types'
import CampsiteList from '../components/Campsitelist/CampsiteList'
import Header from '../components/Header/Header'
import Navigation from '../components/Navigation/Navigation'
import { useEffect } from 'react'
import useCampsites from '../hooks/useCampsites'

Bookmarks.propTypes = {
    headline: PropTypes.string.isRequired
}

export default function Bookmarks({headline}) {
    const { bookmarks, setBookmarks } = useCampsites()

    useEffect(() => {
        setBookmarks()        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <>
            <Header children={headline}/>
            <CampsiteList campsites={bookmarks}/>
            <Navigation/>
        </>
    )   
}
