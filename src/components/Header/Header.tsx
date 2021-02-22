import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <img src='./Autobot.svg' className="header__logo" />
        <h1 className="header__text">
          Transformer Management
        </h1>
      </Link>
    </header>
  );
}