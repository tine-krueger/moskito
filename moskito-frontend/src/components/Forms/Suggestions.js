import styled from 'styled-components/macro'

export default function Suggestions({suggestions, onClick}) {
    return (
        <ListStyled>{suggestions.map((suggestion, index) =>  <ListElement key={index} onClick={() => onClick(suggestion)}>{suggestion.label}</ListElement>)}</ListStyled>
    )
}
const ListStyled = styled.ul`
    margin-top: -1.7em;
    padding: 0.5em 1em;
    list-style: none;
    padding-left: 0;
    background: #d8e6e4;
    opacity: .8;
    border-radius: 10px;
    box-shadow: inset 2px 1px 6px 0 rgba(0,0,0,0.2), inset -3px -4px 6px 0 rgba(255,255,255,.4);
   
`
const ListElement = styled.li`
    padding: .5em 1em;

    &:hover,
    &:focus,
    &:active {
        color: #d3a392;
    }
`
