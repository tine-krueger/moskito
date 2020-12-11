import styled from 'styled-components/macro'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import ButtonBackGroup from "../Button/ButtonBackGroup"
import InputField from './InputField'
import { useAuth } from "../../context/auth"
import useForm from "../../hooks/useForm"

export default function LoginForm() {
    const { fields, handleChange, handleClick } = useForm({
        email: '',
        password: ''
    })
    const [ isLoggedIn, setLoggedIn ] = useState(false)
    const [ isError, setIsError ] = useState(false)
    const { setAuthTokens, getToken } = useAuth()

    if (isLoggedIn) {
        return <Redirect to="/find-campsite"/>
    }

    return (
        <LoginFormStyled onSubmit={handleSubmit}>
            {isError && <p>E-Mail oder Password-Eingabe nicht korrekt!</p> }
            <InputField type={'text'} name='email' value={fields.email} onChange={handleChange} placeholder={'E-Mail'}/>
            <InputField type={'password'} name='password' value={fields.password} onChange={handleChange} placeholder={'Password'}/>
            <ButtonBackGroup text1={'Login'} text2={'Zurück'} onClick={handleClick}/>
        </LoginFormStyled>
    )

    function handleSubmit(event) {
        event.preventDefault()
        getToken(fields)
        .then(result => {
            if ( result.validUntil ) {
                setAuthTokens(result)
                setLoggedIn(true)
            } else {
                setIsError(true)
            }
        })
        .catch(error => setIsError(true));
    }
}

const LoginFormStyled = styled.form`
    max-width: 500px;
    display: grid;
    margin:2em;
`

