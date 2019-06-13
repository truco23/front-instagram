import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/logo.svg';
import camera from '../../../assets/camera.svg';
import './header.css';

class Header extends Component {
    state = {  }
    render() { 
        return (  
            <header className="header">
                <Link to="/">
                    <img 
                        className="header-logo"
                        src={ logo } 
                        alt="Instagram logo" 
                        title="Instagram logo" 
                    />
                </Link>

                <Link to="/new">
                    <img 
                        className="header-logo"
                        src={ camera } 
                        alt="Cadastrar novo post" 
                        title="Cadastrar novo post" 
                    />
                </Link>
            </header>
        );
    }
}
 
export default Header;