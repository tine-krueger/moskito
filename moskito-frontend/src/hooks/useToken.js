import { useState } from 'react'

export default function useToken() {
    const existingTokens = JSON.parse(localStorage.getItem('tokens'))
    const [ authTokens, setAuthTokens] = useState(existingTokens)
    const setTokens = ( data ) => {
        localStorage.setItem("tokens", JSON.stringify(data))
        setAuthTokens(data)
    }
    const deleteTokens = () => {localStorage.removeItem('tokens')}

    return { authTokens, setAuthTokens,  setTokens, deleteTokens }
}
