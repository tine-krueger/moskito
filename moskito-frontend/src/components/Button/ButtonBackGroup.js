import Button from "./Button";
import styled from 'styled-components/macro'

export default function ButtonBackGroup({text1, text2, onClick}) {
    return (
        <Buttons>
            <Button>{text1}</Button>
            <Button onClick={onClick}>{text2}</Button>
        </Buttons>
    )
}

const Buttons = styled.div`
    display: grid;
    justify-items: center;
    Button {
        margin: .5em;
        width: 10em;
    }
`