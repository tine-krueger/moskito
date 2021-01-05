import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import FrontHeadline from '../components/FrontHeadline/FrontHeadline'
import Button from '../components/Button/Button';
import Logo from "../components/Logo/Logo";

export default function Landing() {

    return (
        <FrontGrid>
            <div>
                <Logo/>
                <FrontHeadline>Camping back to the roots</FrontHeadline>
            </div>
            <UserButtons>
                <Link to={'/login'}>
                    <Button>Login </Button> 
                </Link>
                <Link to={'/signin'}>
                    <Button>SignUp </Button>
                </Link>    
            </UserButtons>
        </FrontGrid>
    )
}

const FrontGrid = styled.div`
    display: grid;
    grid-template-rows: 2fr 3fr;
`
const UserButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    Button {
        margin: .5em;
        width: 10em;
    }
`
