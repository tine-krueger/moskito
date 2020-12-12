import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import CampsiteListItem from './CampsiteListItem'
import { loadFromLocal } from '../../lib/localStorage'

CampsiteList.propTypes = {
    campsites: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default function CampsiteList({campsites}) {
    const token = loadFromLocal('tokens')
    console.log(token.value)
    return (
        <CampList>
            {campsites.map(campsite => <CampsiteListItem key={campsite.id} token={token.value} campsite={campsite}/>)}
        </CampList>
    )
}
const CampList = styled.div`
    margin-bottom: 5em;
`
