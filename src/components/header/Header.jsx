import React from 'react';
import './style.css'
const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="header__wrapper">
                    <h1 className="header__title">
                        <strong>Hi, my name is <em>Taras</em></strong><br/>
                        a frontend developer
                    </h1>

                </div>
            </header>
        </div>
    );
};

export default Header;