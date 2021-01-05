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
                <NavListItem data-testid='bookmarks'>
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
    margin: 0 auto;
    max-width: 500px;
    background-color: var(--background);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 2px 4px 8px -4px rgba(0,0,0,0.6), -2px -2px 2px 0px rgba(255,255,255,0.5);
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
                -1px -1px 2px 0px rgba(255, 255, 255, 0.5);
    width: 2.3em;
    height: 2.3em;
    display: flex;
    justify-content: center;
    align-items: center;

    button{
        background-color: transparent;
        border: none;
        
    }
    button:hover {
        outline: none;
    }
    a svg, button svg {
        width: 1.5em;
        height: 1.5em;
        stroke: var(--link);
    }
    button svg{
        width: 1.7em;
        height: 1.7em;
    }

    &:hover,
    &:active,
    &:focus {
        box-shadow: inset 4px 4px 6px 0 rgba(0,0,0,0.2), 
                inset -3px -4px 6px 0 rgba(255,255,255,0.3);
        outline: none;
    }
` 
