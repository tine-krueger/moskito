import { Redirect } from 'react-router-dom'
import styled from 'styled-components/macro'
import Delayed from '../../../hooks/useDelay'

export default function Redirection() {
    return (
        <RedParagraph data-testid='redirect'>Registrierung erfolgreich, Du wirst zum Login weitergeleitet.
            <Delayed waitBeforeShow={2500}>
                <Redirect to="/login"/>
            </Delayed>
        </RedParagraph>
    ) 
}

const RedParagraph = styled.p`
    color: var(--link);
`