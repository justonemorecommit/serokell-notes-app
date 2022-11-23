import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="header">
      <ul className="header-container">
        <li>
          <Link to="/">Todo App</Link>
        </li>
        <li className="float-right">
          <Link to="/">Home</Link>
        </li>
        <li className="float-right">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
