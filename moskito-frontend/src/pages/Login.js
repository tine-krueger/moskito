import Logo from "../components/Logo/Logo"
import FrontHeadline from '../components/FrontHeadline/FrontHeadline'
import LoginForm from '../components/Forms/LoginForm'

export default function Login() {

    return (
        <>
            <Logo inputPadding={'1.5em'}/>
            <FrontHeadline>Login</FrontHeadline>
            <LoginForm />
        </>
    )   
}
