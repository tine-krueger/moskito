import { saveToLocal, loadFromLocal } from '../lib/localStorage'

import { useState } from 'react'

export default function useToken() {
    const existingTokens = loadFromLocal('tokens')
    const [ authTokens, setAuthTokens] = useState(existingTokens)
    const setTokens = ( data ) => {
        saveToLocal("tokens", data)
        setAuthTokens(data)
    }
    const deleteTokens = async (token) => {
        localStorage.removeItem('tokens')

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify(token);

        const requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        try {
            const response = await fetch("http://moskito.local/logout", requestOptions)
            const result = await response.text()
            return console.log(result)
        } catch (error) {
            return console.log('error', error)
        }
    }

    const getToken =  (user) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify(user)
        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        return fetch("http://moskito.local/login", requestOptions)
            .then(response => response.json())     
    }

    return { authTokens, setAuthTokens, setTokens, deleteTokens, getToken }
}
