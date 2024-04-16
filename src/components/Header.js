import Logo from "../assets/logo.png"
import React from 'react'

function Header() {
    return (
        <header>
            <div className="logo">
                <img src={Logo} alt="Taskmate Logo" />
                <span>Taskmate</span>
            </div>
            <div className="themeSelector">
                <span className="light activeTheme"></span>
                <span className="medium"></span>
                <span className="dark"></span>
                <span className="gOne"></span>
                <span className="gTwo"></span>
                <span className="gThree"></span>
            </div>
        </header>
    )
}

export default Header