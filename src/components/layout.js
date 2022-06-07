import React, { useState } from 'react';
import { MDXProvider } from '@mdx-js/react';

import ThemeProvider from './theme/themeProvider';
import mdxComponents from './mdxComponents';
import Sidebar from './sidebar';
import config from '../../config.js';
import Header from './Header';
import SvgElements from './svgElements';
import { ListItem } from './styles/Sidebar';

const Layout = ({ children, location }) => {

  const [menuState, setMenuState] = useState(``);
  const toggleMenu = () => {
    setMenuState((state) => (state === `` ? `nav-open` : ``));
  };

  return (
    <ThemeProvider location={location}>
      <MDXProvider components={mdxComponents}>
        <SvgElements />
        <div>
          <div className="side-bar">
            <div className="site-header">
              {config.sidebar.logo ? (
                <a href="/" className="site-title lh-tight">
                  <img src={config.header.logo} alt={config.header.title} />
                </a>
              ) : (
                <>
                  {config.header.title ? (
                    <a href="/" className="site-title lh-tight">
                      {config.header.title}
                    </a>
                  ) : null}
                </>
              )}

              <button id="menu-button" class="site-button" onClick={toggleMenu}>
                <svg viewBox="0 0 24 24" class="icon">
                  <use xlinkHref="#svg-menu"></use>
                </svg>
              </button>
            </div>

            <nav
              role="navigation"
              aria-label="Main"
              id="site-nav"
              className={`site-nav ${menuState}`}
            >
              <Sidebar location={location} />

              <ul>
                {config.sidebar.links && config.sidebar.links.length > 0 && <hr />}
                {config.sidebar.links.map((link, key) => {
                  if (link.link !== '' && link.text !== '') {
                    return (
                      <ListItem key={key} to={link.link}>
                        {link.text}
                        <span className="nav-list-expander" style={{
                          display: `block`,
                          height: `16px`,
                          width: `16px`,
                          float: `right`,
                          paddingTop: `4px`,
                        }}>
                          <svg height="16" width="16" viewBox="0 0 16 16">
                            <use xlinkHref="#svg-doc"></use>
                          </svg>
                        </span>
                      </ListItem>
                    );
                  }
                })}
              </ul>
            </nav>

            <footer className="site-footer">
              {' '}
              This site uses{' '}
              <a href="https://github.com/underlost/gatsby-just-docs">Gatsby Just Docs</a>, a
              documentation theme for Gatsby.
            </footer>
          </div>
          <div className="main" id="top">
            <Header />
            <div id="main-content-wrap" className="main-content-wrap">
              {children}
            </div>
          </div>
        </div>
      </MDXProvider>
    </ThemeProvider>
  );
};

export default Layout;
