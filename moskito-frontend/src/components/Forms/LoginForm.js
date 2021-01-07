import styled from 'styled-components/macro'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import ButtonBackGroup from "../Button/ButtonBackGroup"
import InputField from './FormElements/InputField'
import useForm from "../../hooks/useForm"
import RedParagraph from '../TextElements/RedParagraph'

LoginForm.propTypes = {
    isLoggedIn: PropTypes.bool,
    isError: PropTypes.bool,
    userLogin: PropTypes.func
}

export default function LoginForm(
    {
        isLoggedIn,
        isError,
        userLogin
    }) { 

    const { inputs, handleChange, handleSubmit, handleClick } = useForm({
        email: '',
        password: ''
    }, login)
    
   
    if (isLoggedIn) {
        return <Redirect data-testId="redirect" to="find-campsite"/>
    }
    
    return (
        <LoginFormStyled onSubmit={handleSubmit}>
            {isError && <RedParagraph>E-Mail oder Password-Eingabe nicht korrekt!</RedParagraph>}
            <InputField type={'text'} name='email' value={inputs.email} onChange={handleChange} placeholder={'E-Mail'} marginBottom={'sm'}/>
            <InputField type={'password'} name='password' value={inputs.password} onChange={handleChange} placeholder={'Passwort'}/>
            <ButtonBackGroup text1={'Login'} text2={'Zurück'} onClick={handleClick}/>
        </LoginFormStyled>
    )

    function login() {
        userLogin(inputs)
    }
       
}

const LoginFormStyled = styled.form`
    max-width: 500px;
    display: grid;
    margin:2em;
`

