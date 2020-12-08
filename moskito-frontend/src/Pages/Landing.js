import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import FrontHeadline from '../Components/FrontHeadline/FrontHeadline'
import Button from '../Components/Button/Button';
import Logo from "../Components/Logo/Logo";


export default function Landing() {

    return (
        <>
            <Logo/>
            <FrontHeadline>Camping back to the roots</FrontHeadline>
            <UserButtons>
                <Link to={'/login'}>
                    <Button>Login </Button> </Link>
                <Link to={'/signin'}>
                    <Button>SignIn </Button></Link>    
            </UserButtons>
        </>
    )
}


const UserButtons = styled.div`
    display: grid;
    justify-items: center;
    margin-top: 4em;
    Button {
        margin: .5em;
        width: 10em;
    }
`