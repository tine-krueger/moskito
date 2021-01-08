import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import Button from '../Button/Button'

export default function Error404() {
    const history = useHistory()
    return(
        <NotFound>
            <h2>Fehler 404: Ups, hier stimmt was nicht!</h2>
            <p>Diese Seite existiert leider nicht (mehr)!</p>
            <Button onClick={handleClick}>Zurück</Button>
        </NotFound>
    )

    function handleClick() {
        history.goBack()
    }
}


const NotFound = styled.div`
    margin: 6em 2.5em;
`