import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assets/Autobot.svg';

export function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <img src={logo} className="header__logo" alt="logo" />
        <h1 className="header__text">
          Transformer Management
        </h1>
      </Link>
    </header>
  );
}