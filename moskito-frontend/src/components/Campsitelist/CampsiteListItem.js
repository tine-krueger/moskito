import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { ImPhone, ImEnvelop } from 'react-icons/im'
import FeatureListItem from './FeatureListItem'
import LikeButton from '../Button/LikeButton'
import { filterFeatures }from '../../services/featureService'


CampsiteListItem.propTypes = {
    campsite: PropTypes.object.isRequired
}

export default function CampsiteListItem({campsite}) {
    
    return (
        <CampItem>
            <h2>{campsite.name}</h2>
            <Address>
                <p>{campsite.street}, {campsite.postalCode} {campsite.place}</p>
                <Contact>
                    {campsite.telephone && <p><ImPhone/>{campsite.telephone}</p>}
                    {campsite.email && <p><ImEnvelop/> {campsite.email}</p>}
                    <a rel="noopener noreferrer" href={campsite.web} target='_blank'>{campsite.web}</a>
                </Contact>
            </Address>
            <FeatureList>
                {filterFeatures(campsite).map(feature => <FeatureListItem key={feature.id} feature={feature}/>)}
            </FeatureList>
            <LikeButton isPinned={campsite.pinned} id={campsite.id}/>
        </CampItem>
    )

}

const CampItem = styled.div`
    box-shadow: 2px 4px 8px -4px rgba(0, 0, 0, 0.6), 
                -2px -2px 2px 0px rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    margin: 2em 1em;
    padding: .5em 1em;
    position: relative;


    h2 {
        width: 75%;
        margin-left: .3em;
    }

`
const Address = styled.div `
    margin-left: .5em;
`

const Contact = styled.div`
    p {
        position: relative;
        padding-left: 2em;
    }

    svg {
        width: 20px;
        height: 20px;
        color: #476c85;
        position: absolute;
        top: 0;
        left: 0;
    }

    a {
        display: block;
        margin-top: 1em;
    }
`
const FeatureList = styled.ul` 
   list-style: none;
   padding-left: 0;
   position: relative;
   margin-top: 3em;

   &::before{
    content: " ";
    display: inline-block;
    position: absolute;
    width: 90%;
    height: 5px;
    left: 5%;
    top: -25px;
    transition: all .2s ease;
    border-radius: 5px;
    box-shadow: 0.5px 0.5px 2px 0px rgba(0,0,0,0.4), 
                -1.25px -1.25px 2px 0px rgba(255,255,255,0.5);
   }
`