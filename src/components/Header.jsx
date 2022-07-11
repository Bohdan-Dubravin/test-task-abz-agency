import React from 'react';
import logo from '../assets/images/Logo.svg';
import Button from './Button';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container page__container">
        <img className="header__logo-img" src={logo} alt="logo-header" />
        <div className="header__signUp-conainer">
          <Button classModificator="button--space-between">
            <a className="button__link" href="#sign-up">
              Users
            </a>
          </Button>
          <Button>
            <a className="button__link" href="#users">
              Sign up
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
