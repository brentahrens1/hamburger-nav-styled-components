import React from 'react'
import { useState } from 'react'
import { 
    NavContainer, 
    NavLogo,
    NavList,
    NavItems,
    HamburgerContainer,
    HamburgerBar,
    Overlay
} from './style'

const NavBar = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    return (
        <NavContainer>
            <NavLogo>
                <h1>NavBar</h1>
            </NavLogo>
            <NavList>
                <NavItems>
                    <li>Music</li>
                    <li>Store</li>
                    <li>Contact</li>
                </NavItems>
            </NavList>
            <Hamburger setIsOpen={setIsOpen} isOpen={isOpen} />
            <Overlay className={isOpen ? "show" : "hide"}>
                <li>Music</li>
                <li>Store</li>
                <li>Contact</li>
            </Overlay>
        </NavContainer>
    )
}

const Hamburger = ({ isOpen, setIsOpen }) =>
    <HamburgerContainer className={isOpen ? "open" : "closed"} onClick={() => setIsOpen(!isOpen)}>
        <HamburgerBar></HamburgerBar>
        <HamburgerBar></HamburgerBar>
        <HamburgerBar></HamburgerBar>
    </HamburgerContainer>


export default NavBar