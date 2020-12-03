import { nameReturn }from '../../services/featureService'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

FeatureListItem.propTypes = {
    feature: PropTypes.object.isRequired
}

export default function FeatureListItem({feature}) {

    return  <FeatureItem key={feature.id}>{nameReturn(feature)}</FeatureItem>

}

const FeatureItem = styled.li `
    border-radius: 10px;
    display: inline-block;
    box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.4), -2px -2px 2px 0px rgba(255,255,255,0.5);
    padding: .5em 1em;
    margin: .5em;
`
