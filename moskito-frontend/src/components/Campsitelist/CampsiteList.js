import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import RedParagraph from '../TextElements/RedParagraph'
import CampsiteListItem from './CampsiteListItem'



CampsiteList.propTypes = {
    campsites: PropTypes.arrayOf(PropTypes.object).isRequired,
    errors: PropTypes.object,
    isCampsite: PropTypes.bool
}

export default function CampsiteList({isCampsite, campsites, errors}) {
    
    if(errors) {
        return <RedParagraph data-testid='error'>{errors.errors}</RedParagraph>
    }

    if(!campsites || campsites.length === 0) {
        if(isCampsite) {
            return (
                <RedParagraph>
                    Leider konnten wir zu Deiner Anfrage keine Campingplätze finden. 
                    Vielleicht ist ja auch die Region zwischen Berlin und Hamburg was für Dich, 
                    da wirst Du bestimmt fündig!
                </RedParagraph> 
            )
        } else {
            return (
                <RedParagraph>
                    Noch keine Lieblingsplätze gespeichert!
                </RedParagraph>
            )
        }
    }

    return (
        <CampList>
            {campsites.map(campsite => <CampsiteListItem key={campsite.id} campsite={campsite}/>)}
        </CampList>
    )
}

const CampList = styled.div`
    margin-bottom: 6em;
    padding: 0 2em
`
