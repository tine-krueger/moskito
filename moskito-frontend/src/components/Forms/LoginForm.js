import styled from 'styled-components/macro'
import ButtonBackGroup from "../Button/ButtonBackGroup"
import {useHistory} from 'react-router-dom'
import InputField from './InputField'
import {useState} from 'react'

export default function LoginForm() {
    const [ user, setUser ] = useState({
        email: '',
        password: ''
    })

    let history = useHistory()

    return (
        <LoginFormStyled onSubmit={handleSubmit}>
            <InputField type={'text'} name='email' value={user.email} onChange={handleChange} placeholder={'E-Mail'}/>
            <InputField type={'password'} name='password' value={user.password} onChange={handleChange} placeholder={'Password'}/>
            <ButtonBackGroup text1={'Login'} text2={'Zurück'} onClick={handleClick}/>
        </LoginFormStyled>
    )
    function handleClick() {
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
    }
}

const LoginFormStyled = styled.form`
    max-width: 500px;
    display: grid;
    margin:2em;
`

