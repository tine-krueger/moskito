import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/auth'
import { FiLogOut } from 'react-icons/fi'



export default function Navigation() {
    const { deleteTokens, setAuthTokens, authTokens } = useAuth()
    return (
        <Navbar>
            <nav>
                <ul>
                    <li>
                        <Link to="/find-campsite"/>
                    </li>
                    <li>
                        <button onClick={logOut}><FiLogOut/></button>
                    </li>
                </ul>
            </nav>
        </Navbar>
    )

    function logOut(event){
        event.preventDefault()
        const token = authTokens
        setAuthTokens()
        deleteTokens(token)
    }
}

const Navbar = styled.div`
    width: 100vw;
    background-color: #c2d6d3;
    border-top: 1px solid grey;
    position: fixed;
    bottom: 0;
    left: 0;

    button {
        width: 50px;
        height: 50px;
    }
`