import * as React from 'react';
import Tree from './tree';
import { StaticQuery, graphql } from 'gatsby';


const SidebarLayout = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx(sort: { fields: frontmatter___nav_order }) {
          edges {
            node {
              fields {
                slug
                title
              }
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      return (
        <nav role="navigation" aria-label="Main" id="site-nav" className="site-nav">
          <Tree edges={allMdx.edges} />
        </nav>
      );
    }}
  />
);

export default SidebarLayout;
