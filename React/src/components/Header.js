import { useState } from 'react';
import logo from '../utils/images/main_logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    const [loginButton, setLoginButton] = useState('Login');
    let isCart = loginButton !== 'Login';

    return (
        <div className="header" style={{ backgroundColor: "#bffffb" }}>
            <div>
                <img className="logo" src={logo}></img>
            </div>
            <div className="navbar">
                <ul>
                    <li>
                        <a href='/'>Home</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li>{isCart ? 'Cart' : ''}</li>
                    <button className='login-button' onClick={() => {
                        if (loginButton === 'Login') {
                            setLoginButton('Logout');
                        } else {
                            setLoginButton('Login');
                        }
                    }}>{loginButton}</button>
                </ul>
            </div>

        </div>
    );
};

export default Header;
