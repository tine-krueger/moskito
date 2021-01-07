import Logo from "../components/Logo/Logo"
import FrontHeadline from '../components/FrontHeadline/FrontHeadline'
import SignUpForm from "../components/Forms/SignUpForm"
import useUserAccess from '../hooks/useUserAccess'

export default function Register() {
    const { isRegistered, loginErrors, userRegistration } = useUserAccess()
    return (
        <>
            <Logo inputPadding={'1.5em'}/>
            <FrontHeadline>Sign Up</FrontHeadline>
            <SignUpForm loginErrors={loginErrors} isRegistered={isRegistered} userRegistration={userRegistration}/>
        </>
    )
}
