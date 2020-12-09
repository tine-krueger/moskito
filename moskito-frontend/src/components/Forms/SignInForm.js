import styled from 'styled-components/macro'
import { useState, useEffect } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import ButtonBackGroup from "../Button/ButtonBackGroup"
import InputField from './InputField'
import { useAuth } from "../../context/auth"

export default function SignInForm() {
    const [ newUser, setNewUser ] = useState({
        firstName: '',
        lastName:'',
        email:'',
        password:'',
        passwordControl:''
    })

    const [ isPasswordEqual, setIsPasswordEqual ] = useState(true)

    useEffect(() => {
        setIsPasswordEqual(newUser.password === newUser.passwordControl)
    }, [newUser])
    
    let history = useHistory()

    return (
        <SigninFormStyled onSubmit={handleSubmit}>
            <InputField type={'text'} name='firstName' value={newUser.firstName} onChange={handleChange} placeholder={'Vorname'}/>
            <InputField type={'text'} name='lastName' value={newUser.lastName} onChange={handleChange} placeholder={'Nachname'}/>
            <InputField type={'text'} name='email' value={newUser.email} onChange={handleChange} placeholder={'E-Mail'}/>
            {!isPasswordEqual && <p>Die Passwörter stimmen nicht überein!</p>}
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
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(newUser);

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://moskito.local/register", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error)); 
    }
}

const SigninFormStyled = styled.form`
    max-width: 500px;
    display: grid;
    margin:2em;
`

