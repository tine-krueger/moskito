import { useState } from 'react'
import { saveToLocal, loadFromLocal } from '../lib/localStorage'
import { makeFetch } from '../lib/fetch'

export default function useToken() {
    
    const existingTokens = loadFromLocal('tokens')
    const [ authTokens, setAuthTokens] = useState(existingTokens)
    const baseUrl = process.env.REACT_APP_BASE_URL
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const setTokens = ( data ) => {
        saveToLocal("tokens", data)
        setAuthTokens(data)
    }

    const deleteTokens = async (token) => {
        localStorage.removeItem('tokens')
        return makeFetch(token, 'DELETE', myHeaders, `${baseUrl}/logout`)
    }

    const getToken =  async (user) => {
        return makeFetch(user,'POST', myHeaders, `${baseUrl}/login`)    
    }

    return { authTokens, setAuthTokens, setTokens, deleteTokens, getToken}
}

