import { ImUser } from 'react-icons/im';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navwrap">
    <div className="title">
      <h1 className="book">Bookstore CMS</h1>
      <ul className="title">
        <li className="link"><Link id="anchora" to="/">BOOKS</Link></li>
        <li className="link"><Link id="anchorb" to="/categories">CATEGORIES</Link></li>
      </ul>
    </div>
    <div id = "icon">
      <button type="button" className="user" label="user"><ImUser /></button>
    </div>
  </nav>
);

export default Header;
