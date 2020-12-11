import { useState } from 'react'
import { saveToLocal, loadFromLocal } from '../lib/localStorage'
import { makeFetch } from '../lib/fetch'

export default function useToken() {
    const existingTokens = loadFromLocal('tokens')
    const [ authTokens, setAuthTokens] = useState(existingTokens)
    const setTokens = ( data ) => {
        saveToLocal("tokens", data)
        setAuthTokens(data)
    }

    const deleteTokens = async (token) => {
        localStorage.removeItem('tokens')
        const baseUrl = "http://moskito.local/logout"
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        return makeFetch(token, 'DELETE', myHeaders, baseUrl)
    }

    const getToken =  async (user) => {
        const baseUrl = "http://moskito.local/login"
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        return makeFetch(user,'POST', myHeaders, baseUrl)    
    }

    return { authTokens, setAuthTokens, setTokens, deleteTokens, getToken}
}

