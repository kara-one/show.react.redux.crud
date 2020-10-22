import './Header.scss';

import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrap container">
                <a href="/" className="header__logo">
                    CRUD
                </a>

                <div className="header__buttons">
                    <button className="btn btn-danger btn-add">ADD</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
