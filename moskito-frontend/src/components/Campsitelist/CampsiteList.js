
import PropTypes from 'prop-types'
import CampsiteListeItem from './CampsiteListItem'

CampsiteList.propTypes = {
    campsites: PropTypes.arrayOf(PropTypes.array).isRequired
}

export default function CampsiteList({campsites}) {
    return (
        <div>
            {campsites.map(campsite => <CampsiteListeItem campsite={campsite}/>)}
        </div>
    )
}

