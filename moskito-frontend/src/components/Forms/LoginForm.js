import styled from 'styled-components/macro'
import ButtonBackGroup from "../Button/ButtonBackGroup"
import { Redirect, useHistory } from 'react-router-dom'
import InputField from './InputField'
import { useState } from 'react'
import { useAuth } from "../../context/auth"

export default function LoginForm() {
    const [ user, setUser ] = useState({
        email: '',
        password: ''
    })
    const [ isLoggedIn, setLoggedIn ] = useState(false)
    const [ isError, setIsError ] = useState(false)
    const { setAuthTokens, getToken } = useAuth()
    let history = useHistory()

    if (isLoggedIn) {
        return <Redirect to="/find-campsite"/>
    }

    return (
        <LoginFormStyled onSubmit={handleSubmit}>
            {isError && <p>E-Mail oder Password-Eingabe nicht korrekt!</p>}
            <InputField type={'text'} name='email' value={user.email} onChange={handleChange} placeholder={'E-Mail'}/>
            <InputField type={'password'} name='password' value={user.password} onChange={handleChange} placeholder={'Password'}/>
            <ButtonBackGroup text1={'Login'} text2={'Zurück'} onClick={handleClick}/>
        </LoginFormStyled>
    )

    function handleClick(event) {
        event.preventDefault()
        history.goBack()
    }

    function handleChange(event) {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        getToken(user)
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

