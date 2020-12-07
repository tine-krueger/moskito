import { nameReturn }from '../../services/featureService'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

FeatureListItem.propTypes = {
    feature: PropTypes.object.isRequired
}

export default function FeatureListItem({feature, index}) {

    return <FeatureItem id={feature.id} key={index}>{nameReturn(feature)}</FeatureItem>

}

const FeatureItem = styled.li `
    border-radius: 10px;
    display: inline-block;
    box-shadow: inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2), 
                inset -3px -4px 6px 0 rgba(255, 255, 255, 0.3);
    padding: .5em 1em;
    margin: .5em;
`
