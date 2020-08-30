import React from 'react'
import logo from '../../assets/images/logo2.png'

class Header extends React.Component {
    render() {

        return (
            <div className="header">
                <div className="navbar">
                    <div className="logo">
                        <img className="logo-pic" src={logo} alt="logo" />
                        <h1>PACKER</h1>
                    </div>
                    <p>Call us: (256) 315 000000</p>
                </div>
            </div>

        )
    }
}

export default Header;