import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <h1>
        <Link to="/">Transformer Management</Link>
      </h1>
    </header>
  );
}