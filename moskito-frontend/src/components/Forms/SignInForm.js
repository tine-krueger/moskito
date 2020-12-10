import styled from 'styled-components/macro'
import { useState, useEffect } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import ButtonBackGroup from "../Button/ButtonBackGroup"
import InputField from './InputField'
import Delayed from '../../hooks/useDelay'

export default function SignInForm() {
    const [ newUser, setNewUser ] = useState({
        firstName: '',
        lastName:'',
        email:'',
        password:'',
        passwordControl:''
    })

    const [ isPasswordEqual, setIsPasswordEqual ] = useState(true)
    const [ isRegistered, setIsRegistered ] = useState(false)

    useEffect(() => {
        setIsPasswordEqual(newUser.password === newUser.passwordControl)
    }, [newUser])
    
    let history = useHistory()



    return (
        <SigninFormStyled onSubmit={handleSubmit}>
            {isRegistered && <RedParagraph>Registrierung ergolgreich, Du wirst zum Login weitergeleitet.
                    <Delayed waitBeforeShow={3000}>
                        <Redirect to="/login"/>
                    </Delayed>
                </RedParagraph>
            }
            <InputField type={'text'} name='firstName' value={newUser.firstName} onChange={handleChange} placeholder={'Vorname'}/>
            <InputField type={'text'} name='lastName' value={newUser.lastName} onChange={handleChange} placeholder={'Nachname'}/>
            <InputField type={'text'} name='email' value={newUser.email} onChange={handleChange} placeholder={'E-Mail'}/>
            {!isPasswordEqual && <RedParagraph>Die Passwörter stimmen nicht überein!</RedParagraph>}
            <InputField type={'password'} name='password' value={newUser.password} onChange={handleChange} placeholder={'Password'}/>
            <InputField type={'password'} name='passwordControl' value={newUser.passwordControl} onChange={handleChange} placeholder={'Password'}/>
            <ButtonBackGroup text1={'SignIn'} text2={'Zurück'} onClick={handleClick}/>
        </SigninFormStyled>
    )

    function handleClick(event) {
        event.preventDefault()
        history.push('/')
    }

    function handleChange(event) {
        setNewUser({
            ...newUser,
            [event.target.name]: event.target.value
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        isPasswordEqual && sendRequest()
    }

    function sendRequest() {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify(newUser);

        const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://moskito.local/register", requestOptions)
        .then(response => response.json())
        .then(result => {
            result[0].email && setIsRegistered(true)
            console.log(result)
            })
        .then(console.log(isRegistered))
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
