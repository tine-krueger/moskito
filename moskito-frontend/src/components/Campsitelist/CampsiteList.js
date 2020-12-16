import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import CampsiteListItem from './CampsiteListItem'


CampsiteList.propTypes = {
    campsites: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default function CampsiteList({campsites}) {

    
    
    return (
        <CampList>
            {campsites.map(campsite => <CampsiteListItem key={campsite.id} campsite={campsite}/>)}
        </CampList>
    )
}
const CampList = styled.div`
    margin-bottom: 6em;
`
