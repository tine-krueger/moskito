import { useState } from 'react'
import { useAuth } from "../context/auth"

export default function useUserAccess() {
    const { setAuthTokens, getToken } = useAuth()
    const [ isLoggedIn, setLoggedIn ] = useState(false)
    const [ isError, setIsError ] = useState(false)

    return { isLoggedIn, isError, userLogin }

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
}