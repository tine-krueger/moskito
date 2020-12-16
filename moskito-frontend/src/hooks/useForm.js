import { useState } from 'react'
import { useHistory } from 'react-router-dom' 

export default function useForm(initialState) {
    const [ fields, setValues ] = useState(initialState)
    const history = useHistory()

    return { fields, handleChange, handleClick, setValues }
    
    function handleChange(event) {
        setValues({
            ...fields,
            [event.target.name]: event.target.value
        })
    }

    function handleClick(event) {
        event.preventDefault()
        history.push('/')
    }
}
