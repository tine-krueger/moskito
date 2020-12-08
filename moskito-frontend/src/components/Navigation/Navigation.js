import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
import { AiOutlineSearch, AiFillPushpin } from 'react-icons/ai'
import { useAuth } from '../../context/auth'



export default function Navigation() {
    const { deleteTokens, setAuthTokens, authTokens } = useAuth()
    return (
        <Navbar>
            <NavList>
                <NavListItem>
                    <Link to="/find-campsite"><AiOutlineSearch /></Link>
                </NavListItem>
                <NavListItem>
                    <Link to="/find-campsite"><AiFillPushpin /></Link>
                </NavListItem>
                <NavListItem>
                    <button onClick={logOut}><FiLogOut /></button>
                </NavListItem>
            </NavList>
        </Navbar>
    )

    function logOut(event){
        event.preventDefault()
        const token = authTokens
        setAuthTokens()
        deleteTokens(token)
    }
}

const Navbar = styled.nav`
    width: 100vw;
    background-color: #c2d6d3;
    border-top: 1px solid grey;
    position: fixed;
    bottom: 0;
    left: 0;

`

const NavList = styled.ul`
    padding-left:0;
    list-style-type: none;
    display: flex;
    justify-content: space-around;
`    
const NavListItem = styled.li`
    width: 20%;
    text-align: center;

    button{
        background-color: #c2d6d3;
        border: none;
    }
    a svg, button svg {
        width: 2em;
        height: 2em;
        stroke: #c97f63;
    }
`  