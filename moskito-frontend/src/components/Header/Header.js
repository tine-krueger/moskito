import styled from 'styled-components/macro'

export default function Header({children}) {
    return (
        <HeaderStyled>
            <h1>{children}</h1>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.div`
    width: 80%;
    margin: 2em auto 3em;
    padding: .25em .5em;
    border-radius: 20px;
    text-align: center;
    box-shadow: 2px 4px 8px -4px rgba(0, 0, 0, 0.6), 
                -2px -2px 2px 0px rgba(255, 255, 255, 0.5);
`