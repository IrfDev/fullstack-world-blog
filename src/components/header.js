import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle, menuStatus, toggleMenu }) => (
  <header
    style={{
      position: 'fixed',
      zIndex: 100,
      minWidth: '100vw',
    }}
    className='row p-4 m-0 header-layout justify-content-between'
  >
    <div className='info'>
      <h1 className='_title' style={{ margin: 0 }}>
        <Link
          to='/'
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div onClick={toggleMenu} className='icon'>
      <i class='fas fa-bars'></i>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
