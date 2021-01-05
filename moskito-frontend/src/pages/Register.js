import Logo from "../components/Logo/Logo"
import FrontHeadline from '../components/FrontHeadline/FrontHeadline'
import SignUpForm from "../components/Forms/SignUpForm"

export default function Register() {
    return (
        <>
            <Logo inputPadding={'1.5em'}/>
            <FrontHeadline>Sign Up</FrontHeadline>
            <SignUpForm />
        </>
    )
}
