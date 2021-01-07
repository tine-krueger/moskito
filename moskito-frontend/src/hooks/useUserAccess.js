import { useState } from 'react'
import { useAuth } from '../context/auth'
import { signUserIn } from "../services/handleUserApi"

export default function useUserAccess() {
    const { setAuthTokens, getToken } = useAuth()
    const [ isRegistered, setIsRegistered ] = useState(false)
    const [ isLoggedIn, setLoggedIn ] = useState(false)
    const [ isError, setIsError ] = useState(false)
    const [ loginErrors, setErrors ] = useState()

    return { isRegistered, isLoggedIn, isError, loginErrors, userLogin, userRegistration }

    function userLogin(inputs) {
        getToken(inputs)
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

    function userRegistration(isPasswordEqual, inputs) {
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