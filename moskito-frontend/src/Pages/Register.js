import Logo from "../components/Logo/Logo"
import FrontHeadline from '../components/FrontHeadline/FrontHeadline'
import SignInForm from "../components/Forms/SignInForm"

export default function Register() {
    return (
        <>
            <Logo inputMargin={'1.5em'}/>
            <FrontHeadline>Sign In</FrontHeadline>
            <SignInForm />
        </>
    )
}


