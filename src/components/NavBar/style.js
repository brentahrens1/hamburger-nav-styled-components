import styled from 'styled-components'

export const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 100%;
    height: 5rem;
    z-index: 999;
    background: green;
    color: #fff;
`

export const NavLogo = styled.div`
    font-size: 1.2rem;
    align-self: center;
    margin-left: 1rem;
`

export const NavList = styled.div`
    width: 15rem;
    font-size: 1rem;
    align-self: center;
    margin-right: 1rem;
    cursor: pointer;
    li::after {
        content: '';
        display: block;
        background: #fff;
        width: 0;
        height: .1rem;
        margin-top: .2rem;
        transition: width .2s;
    }
    li:hover::after {
        width: 100%;
    }
     @media (max-width: 950px) {
        li {
            display: none;
        }
    }
`

export const NavItems = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
    position: relative;
    align-self: center;
`

export const HamburgerContainer = styled.div`
    width: 40px;
    height: 25px;
    position: relative;
    display: none;
    margin-left: auto;
    align-self: center;
    cursor: pointer;
    z-index: 1000;
    margin-right: 1rem;
    @media (max-width: 950px) {
        display: block;
    }
`

export const HamburgerBar = styled.div`
    position: absolute;
    width: 25px;
    height: 3px;
    background: #fff;
    left: 0;
    transition: all .50s ease-in-out;
    &:nth-child(1) {
        top: 0;
    }
    &:nth-child(2) {
        top: 6px;
    }
    &:nth-child(3) {
        top: 12px;
    }
    .open > & {
        transition: all 1s ease-in-out;
    }
    .open > &:first-child {
        top: 45%;
        transform: rotate(135deg);
        transition: all .50s ease-in-out;
    }
    .open > &:nth-child(2) {
        opacity: 0;
        left: -60px;
        transition: all .50s ease-in-out;
    }
    .open > &:nth-child(3) {
        transform: rotate(-135deg);
        transition: all .50s ease-in-out;
    }
`

export const Overlay = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    left: -120rem;
    transition: left .75 ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    font-size: 3.5rem;
    background: blue;
    color: #fff;
    list-style: none;
    &.show {
        left: 0;
    }
`