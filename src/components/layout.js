import React from 'react';

import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Global, css } from '@emotion/core';
import { Helmet } from 'react-helmet';

import AsideBar from '../components/Molecules/AsideBar';
import Header from './header';
// import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const styles = css`
    .main-wrapper-layout {
    }
  `;

  const [openMenu, setMenu] = React.useState(false);

  const toggleMenu = () => {
    if (openMenu === true) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };
  return (
    <>
      <Helmet>
        <link
          rel='stylesheet'
          href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
          integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk'
          crossOrigin='anonymous'
        />
        <script
          src='https://kit.fontawesome.com/767b73986e.js'
          crossOrigin='anonymous'
        ></script>
      </Helmet>
      <Global styles={styles} />
      <div className='website-wrapper'>
        <div className={`main-wrapper-layout ${openMenu ? 'activee' : ''}`}>
          <Header
            toggleMenu={toggleMenu}
            siteTitle={data.site.siteMetadata.title}
          />

          <main>{children}</main>
          <AsideBar toggleMenu={toggleMenu} />
          <footer className='main-footer d-flex align-items-center justify-content-between'>
            <div className='main'>
              © {new Date().getFullYear()}, Built by
              {` `}
              <a href='https://github.com/IrfDev'>IrfDev</a>
            </div>
            <div className='logo'>
              <Link
                to='/'
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                <img
                  src='/fullstack-logo.png'
                  alt='logo fullstack'
                  className='_logo img-fluid'
                />
              </Link>
            </div>
          </footer>
        </div>
      </div>

      <script
        src='https://code.jquery.com/jquery-3.5.1.slim.min.js'
        integrity='sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj'
        crossOrigin='anonymous'
      />
      <script
        src='https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js'
        integrity='sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo'
        crossOrigin='anonymous'
      />
      <script
        src='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js'
        integrity='sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI'
        crossOrigin='anonymous'
      />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
