import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle, menuStatus, toggleMenu }) => (
  <header
    style={{
      position: 'absolute',
      zIndex: 100,
      minWidth: '98vw',
    }}
    className='row p-4 m-0 header-layout justify-content-between'
  >
    <div className='info'>
      <Link
        to='/'
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <img src='/fullstack-logo.png' alt='logo' className='_logo img-fluid' />
      </Link>
    </div>
    <div role='navigation' className='icon mr-lg-3' tabIndex={-42}>
      <i onClick={toggleMenu} class='fas fa-bars' />
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
