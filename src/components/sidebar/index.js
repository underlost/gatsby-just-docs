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
        <Tree edges={allMdx.edges} />
      );
    }}
  />
);

export default SidebarLayout;
