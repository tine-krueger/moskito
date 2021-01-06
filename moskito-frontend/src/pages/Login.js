import Logo from "../components/Logo/Logo"
import FrontHeadline from '../components/FrontHeadline/FrontHeadline'
import LoginForm from '../components/Forms/LoginForm'
import useUserAccess from '../hooks/useUserAccess'

export default function Login() {
    const { isLoggedIn, isError, userLogin } = useUserAccess()

    return (
        <>
            <Logo inputPadding={'1.5em'}/>
            <FrontHeadline>Login</FrontHeadline>
            <LoginForm isLoggedIn={isLoggedIn} isError={isError} userLogin={userLogin}/>
        </>
    )   
}
