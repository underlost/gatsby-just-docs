import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';

import ThemeProvider from './theme/themeProvider';
import mdxComponents from './mdxComponents';
import Sidebar from './sidebar';
import RightSidebar from './rightSidebar';
import config from '../../config.js';
import Header from './Header';
import SvgElements from './svgElements';

const Layout = ({ children, location }) => (
  <ThemeProvider location={location}>
    <MDXProvider components={mdxComponents}>
      <SvgElements />
      <div>
        <div className="side-bar">
          {config.sidebar.title ? (
            <div className="site-header">
              <a href="/" className="site-title lh-tight">{config.sidebar.title}</a>
            </div>
          ) : null}

          <Sidebar location={location} />

          <footer className="site-footer">
            {' '}
            This site uses{' '}
            <a href="https://github.com/underlost/gatsby-just-the-docs">Gatsby Just the Docs</a>, a
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

export default Layout;
