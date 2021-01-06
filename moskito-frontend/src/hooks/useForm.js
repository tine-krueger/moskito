import { useState } from 'react'
import { useHistory } from 'react-router-dom' 

export default function useForm(initialState, callback) {
    const [ inputs, setInputs ] = useState(initialState)
    const history = useHistory()

    return { inputs, setInputs, handleChange, handleSubmit, handleClick }
    
    function handleChange(event) {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        callback()
    }

    function handleClick(event) {
        event.preventDefault()
        history.push('/')
    }
}
