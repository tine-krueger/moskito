import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom' 

export default function useForm(initialState, callback) {
    const [ inputs, setInputs ] = useState(initialState)
    const [ isPasswordEqual, setIsPasswordEqual ] = useState(true)
    const history = useHistory()

    useEffect(() => {
        setIsPasswordEqual(inputs.password === inputs.passwordControl)
    }, [inputs])

    return { inputs, isPasswordEqual, setInputs, handleChange, handleSubmit, handleClick }
    
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
