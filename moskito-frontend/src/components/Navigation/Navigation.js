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
                    <Link to="/bookmarks"><AiFillPushpin /></Link>
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
    position: fixed;
    bottom: 0;
    left: 0;
    box-shadow: 2px 4px 8px -4px rgba(0, 0, 0, 0.6), 
    -2px -2px 2px 0px rgba(255, 255, 255, 0.5);

`

const NavList = styled.ul`
    padding-left:0;
    list-style-type: none;
    display: flex;
    justify-content: space-around;
`    
const NavListItem = styled.li`
    text-align: center;
    border-radius: 10px;
    box-shadow: 2px 4px 8px -4px rgba(0, 0, 0, 0.6), 
                -2px -2px 2px 0px rgba(255, 255, 255, 0.5);
    width: 3em;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;

    button{
        background-color: #c2d6d3;
        border: none;
    }
    a svg, button svg {
        width: 2em;
        height: 2em;
        stroke: #c97f63;
    }
    button svg{
        width: 2.3em;
        height: 2.3em;
    }

    &:hover,
    &:active,
    &:focus {
        background: linear-gradient(145deg, #A2B2B0, #E2FAF6);
        box-shadow: 2px 4px 8px -4px rgba(0,0,0,0.6), 
                -2px -2px 2px 0px rgba(255,255,255,0.5);
        outline: none;
    }
` 
