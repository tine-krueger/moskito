import Button from "../Components/Button/Button";
import { Link } from 'react-router-dom'
import Logo from "../Components/Logo/Logo";
import styled from 'styled-components/macro'

export default function Landing() {

    return (
        <div>
            <Logo/>
            <FrontHeadline>Camping back to the roots</FrontHeadline>
            <UserButtons>
                <Link to={'/login'}><Button>Login</Button> </Link>
                <Link to={'/signin'}><Button>SignIn</Button> </Link>    
            </UserButtons>
        </div>
    )
}


const UserButtons = styled.div`
    display: grid;
    justify-items: center;
    margin-top: 4em;
    Button {
        margin: .5em;
    }
`

const FrontHeadline = styled.h1`
    font-family: 'Hind Madurai';
    font-size: 1.5em;
    text-align: center;
    margin-top: 1em;

`