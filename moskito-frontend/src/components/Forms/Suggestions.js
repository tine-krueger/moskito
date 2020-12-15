import styled from 'styled-components/macro'

export default function Suggestions({suggestions, onClick}) {
    return (
        <ListStyled>{suggestions.map((suggestion, index) => <li key={index} onClick={() => onClick(suggestion)}>{suggestion.label}</li>)}</ListStyled>
    )
}


const ListStyled = styled.ul`

`