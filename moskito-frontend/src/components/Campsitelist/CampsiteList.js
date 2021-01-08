import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import RedParagraph from '../TextElements/RedParagraph'
import CampsiteListItem from './CampsiteListItem'


CampsiteList.propTypes = {
    campsites: PropTypes.arrayOf(PropTypes.object).isRequired,
    errors: PropTypes.object
}

export default function CampsiteList({campsites, errors}) {

    return (
        <CampList>
            {errors && <RedParagraph data-testid='error'>{errors.errors}</RedParagraph>}
            {campsites.length === 0 && <RedParagraph>Leider konnten wir zu Deiner Anfrage keine Campingplätze finden. 
                Vielleicht ist ja auch die Region zwischen Berlin und Hamburg was für Dich, da wirst Du bestimmt fündig!</RedParagraph>}
            {campsites.map(campsite => <CampsiteListItem key={campsite.id} campsite={campsite}/>)}
        </CampList>
    )
}

const CampList = styled.div`
    margin-bottom: 6em;
    padding: 0 2em
`
