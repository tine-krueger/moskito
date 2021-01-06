import styled from 'styled-components/macro'
import ButtonBackGroup from "../Button/ButtonBackGroup"
import InputField from './FormElements/InputField'
import useForm from '../../hooks/useForm'
import Redirection from './FormElements/Redirection'

export default function SignUpForm({
    loginErrors, 
    isRegistered, 
    userRegistration
}) {

    const { inputs, isPasswordEqual, handleChange, handleSubmit, handleClick } = useForm({
        firstName: '',
        lastName:'',
        email:'',
        password:'',
        passwordControl:''
    }, signup)
    

    return (
        <SigninFormStyled onSubmit={handleSubmit}>
            {isRegistered && <Redirection/>}
            {loginErrors && loginErrors.map((error, index) => <RedParagraph key={index}>{error}</RedParagraph>)}

            <InputField type='text' name='firstName' value={inputs.firstName} onChange={handleChange} placeholder={'Vorname'} marginBottom={'sm'}/>
            <InputField type='text' name='lastName' value={inputs.lastName} onChange={handleChange} placeholder={'Nachname'} marginBottom={'sm'}/>
            <InputField type='text' name='email' value={inputs.email} onChange={handleChange} placeholder={'E-Mail'} marginBottom={'sm'}/>

            {!isPasswordEqual && <RedParagraph>Die Passwörter stimmen nicht überein!</RedParagraph>}
            
            <InputField type={'password'} name='password' value={inputs.password} onChange={handleChange} placeholder={'Passwort'} marginBottom={'sm'}/>
            <InputField type={'password'} name='passwordControl' value={inputs.passwordControl} onChange={handleChange} placeholder={'Passwort Wiederholung'}/>
            <ButtonBackGroup text1={'SignUp'} text2={'Zurück'} onClick={handleClick}/>
        </SigninFormStyled>
    )

    function signup() {
        userRegistration(isPasswordEqual, inputs)
    }
}

const SigninFormStyled = styled.form`
    max-width: 500px;
    display: grid;
    margin:2em;
`
const RedParagraph = styled.p`
    color: var(--link);
`
