
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import CampsiteListItem from './CampsiteListItem'

CampsiteList.propTypes = {
    campsites: PropTypes.arrayOf(PropTypes.array).isRequired
}

export default function CampsiteList({campsites}) {
    return (
        <CampList>
            {campsites.map(campsite => <CampsiteListItem campsite={campsite}/>)}
        </CampList>
    )
}

const CampList = styled.div``
