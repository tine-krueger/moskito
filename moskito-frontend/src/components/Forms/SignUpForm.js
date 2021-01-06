import styled from 'styled-components/macro'
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import ButtonBackGroup from "../Button/ButtonBackGroup"
import InputField from './InputField'
import Delayed from '../../hooks/useDelay'
import useForm from "../../hooks/useForm"
import { signUserIn } from "../../services/handleUserApi"

export default function SignUpForm() {
    //handle Sumbit
    const { inputs, handleChange, handleSubmit, handleClick } = useForm({
        firstName: '',
        lastName:'',
        email:'',
        password:'',
        passwordControl:''
    }, signup)

    const [ isPasswordEqual, setIsPasswordEqual ] = useState(true)
    const [ isRegistered, setIsRegistered ] = useState(false)
    const [ errors, setErrors ] = useState()

    useEffect(() => {
        setIsPasswordEqual(inputs.password === inputs.passwordControl)
    }, [inputs])



    return (
        <SigninFormStyled onSubmit={handleSubmit}>
            {isRegistered && <RedParagraph>Registrierung ergolgreich, Du wirst zum Login weitergeleitet.
                    <Delayed waitBeforeShow={2500}>
                        <Redirect to="/login"/>
                    </Delayed>
                </RedParagraph>
            }

            { errors && errors.map((error, index) => <RedParagraph key={index}>{error}</RedParagraph>)}

            <InputField type='text' name='firstName' value={inputs.firstName} onChange={handleChange} placeholder={'Vorname'} marginBottom={'sm'}/>
            <InputField type='text' name='lastName' value={inputs.lastName} onChange={handleChange} placeholder={'Nachname'} marginBottom={'sm'}/>
            <InputField type='text' name='email' value={inputs.email} onChange={handleChange} placeholder={'E-Mail'} marginBottom={'sm'}/>

            {!isPasswordEqual && <RedParagraph>Die Passwörter stimmen nicht überein!</RedParagraph>}
            
            <InputField type={'password'} name='password' value={inputs.password} onChange={handleChange} placeholder={'Passwort'} marginBottom={'sm'}/>
            <InputField type={'password'} name='passwordControl' value={inputs.passwordControl} onChange={handleChange} placeholder={'Passwort Wiederholung'}/>
            <ButtonBackGroup text1={'SignIn'} text2={'Zurück'} onClick={handleClick}/>
        </SigninFormStyled>
    )

    function signup() {
        isPasswordEqual && signUserIn(inputs)
        .then(result => {
                if (result.errors) {
                    setErrors(result.errors)
                } else { 
                    setIsRegistered(true)
                }
            })
        .catch(error => console.log('error', error)); 
    }
}

const SigninFormStyled = styled.form`
    max-width: 500px;
    display: grid;
    margin:2em;
`
const RedParagraph = styled.p`
    color: #c97f63;
`
