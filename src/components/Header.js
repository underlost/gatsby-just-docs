import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Loadable from 'react-loadable';
import config from '../../config.js';
import LoadingProvider from './mdxComponents/loading';
import ThemeToggle from './ThemeToggle.js';
const isSearchEnabled = config.header.search && config.header.search.enabled ? true : false;

let searchIndices = [];

if (isSearchEnabled && config.header.search.indexName) {
  searchIndices.push({
    name: `${config.header.search.indexName}`,
    title: `Results`,
    hitComp: `PageHit`,
  });
}

const LoadableComponent = Loadable({
  loader: () => import('./search/index'),
  loading: LoadingProvider,
});

function myFunction() {
  var x = document.getElementById('navbar');

  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

const Header = ({ location }) => (
  <StaticQuery
    query={graphql`
      query headerTitleQuery {
        site {
          siteMetadata {
            headerTitle
            logo {
              link
              image
            }
          }
        }
      }
    `}
    render={(data) => {

      return (
        <div id="main-header" className="main-header">
          {isSearchEnabled ? <LoadableComponent collapse={true} indices={searchIndices} /> : null}

          <>
            <div className={'navBarDefault removePadd'}>
              <span
                onClick={myFunction}
                className={'navBarToggle'}
                onKeyDown={myFunction}
                role="button"
                tabIndex={0}
              >
                <span className={'iconBar'}></span>
                <span className={'iconBar'}></span>
                <span className={'iconBar'}></span>
              </span>
            </div>
            {isSearchEnabled ? (
              <div className={'searchWrapper'}>
                <LoadableComponent collapse={true} indices={searchIndices} />
              </div>
            ) : null}
          </>
          <nav aria-label="Auxiliary" className="aux-nav pt-3">
            <ThemeToggle />
          </nav>
        </div>
      );
    }}
  />
);

export default Header;
