import React from 'react';
import { Layout, Link } from '$components';

const NotFoundPage = () => (
  <Layout>
    <div id="main-content" className="main-content" role="main">
      <h1>404</h1>
      <p className="fs-6 fw-300">Page Not found.</p>

      <hr />

      <footer>
        <p className="text-small text-grey-dk-100 mb-0">
          Copyright © 2022 Tyler Rilling. Distributed by an{' '}
          <a href="https://github.com/underlost/gatsby-just-the-docs/tree/master/LICENSE">
            MIT license
          </a>
          .
        </p>
      </footer>
    </div>
  </Layout>
);

export default NotFoundPage;
