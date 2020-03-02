


import React from 'react';
import logo from '../../img/logo-white.png'

const Header = () => {

    return (
        <div className='header'>
            <img src={logo} alt="logo" className="logo" />
            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-top">
                        OUTDOOR
                    </span>
                    <span className="heading-sub">
                        is where life happens
                    </span>
                </h1>
                <a href="/" className="btn btn-white">Discover our tour</a>
            </div>
            <div className="test">
                <p>test 1</p>
                <p>test 2</p>
                <p>test 3</p>
            </div>
        </div>
    )

}
export default Header;