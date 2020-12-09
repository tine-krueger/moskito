import Logo from "../Components/Logo/Logo"
import FrontHeadline from '../Components/FrontHeadline/FrontHeadline'
import SignInForm from "../Components/Forms/SignInForm"

export default function Register() {
    return (
        <>
            <Logo inputMargin={'1.5em'}/>
            <FrontHeadline>Sign In</FrontHeadline>
            <SignInForm />
        </>
    )
}


