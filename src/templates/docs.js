import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';

import { Layout, Link } from '$components';
import NextPrevious from '../components/NextPrevious';
import config from '../../config';
import TableOfContents from '../components/TableOfContents';

const forcedNavOrder = config.sidebar.forcedNavOrder;

export default class MDXRuntimeTest extends Component {
  render() {
    const { data } = this.props;

    if (!data) {
      return this.props.children;
    }
    const {
      allMdx,
      mdx,
      site: {
        siteMetadata: { docsLocation, title },
      },
    } = data;

    const navItems = allMdx.edges
      .map(({ node }) => node.fields.slug)
      .filter(slug => slug !== '/')
      .sort()
      .reduce(
        (acc, cur) => {
          if (forcedNavOrder.find(url => url === cur)) {
            return { ...acc, [cur]: [cur] };
          }

          let prefix = cur.split('/')[1];

          if (config.gatsby && config.gatsby.trailingSlash) {
            prefix = prefix + '/';
          }

          if (prefix && forcedNavOrder.find(url => url === `/${prefix}`)) {
            return { ...acc, [`/${prefix}`]: [...acc[`/${prefix}`], cur] };
          } else {
            return { ...acc, items: [...acc.items, cur] };
          }
        },
        { items: [] }
      );

    const nav = forcedNavOrder
      .reduce((acc, cur) => {
        return acc.concat(navItems[cur]);
      }, [])
      .concat(navItems.items)
      .map(slug => {
        if (slug) {
          const { node } = allMdx.edges.find(({ node }) => node.fields.slug === slug);

          return { title: node.fields.title, url: node.fields.slug };
        }
      });

    // meta tags
    const metaTitle = mdx.frontmatter.metaTitle;

    const metaDescription = mdx.frontmatter.metaDescription;

    const show_toc = mdx.frontmatter.show_toc;

    let canonicalUrl = config.gatsby.siteUrl;

    canonicalUrl =
      config.gatsby.pathPrefix !== '/' ? canonicalUrl + config.gatsby.pathPrefix : canonicalUrl;
    canonicalUrl = canonicalUrl + mdx.fields.slug;

    return (
      <Layout {...this.props}>
        <Helmet>
          {metaTitle ? <title>{metaTitle}</title> : null}
          {metaTitle ? <meta name="title" content={metaTitle} /> : null}
          {metaDescription ? <meta name="description" content={metaDescription} /> : null}
          {metaTitle ? <meta property="og:title" content={metaTitle} /> : null}
          {metaDescription ? <meta property="og:description" content={metaDescription} /> : null}
          {metaTitle ? <meta property="twitter:title" content={metaTitle} /> : null}
          {metaDescription ? (
            <meta property="twitter:description" content={metaDescription} />
          ) : null}
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>

        <div id="main-content" className="main-content" role="main">
          <h1 id={mdx.fields.slug}>
            {' '}
            <a href={`#${mdx.fields.slug}`} className="anchor-heading" aria-labelledby="labels">
              <svg height="16" width="16" viewBox="0 0 16 16" aria-hidden="true">
                <use xlinkHref="#svg-link"></use>
              </svg>
            </a>{' '}
            {mdx.fields.title}
          </h1>

          {metaDescription ? <p className="fs-6 fw-300">{metaDescription}</p> : null}

          {show_toc == false ? null : <TableOfContents location={this.props.location} /> }

          <MDXRenderer>{mdx.body}</MDXRenderer>

          <hr />

          <footer>
            <div className={'mt-2'}>
              <NextPrevious mdx={mdx} nav={nav} />
            </div>

            <p className="mt-2">
              <a href="#top" id="back-to-top">
                Back to top
              </a>
            </p>

            <p className="text-small text-grey-dk-100 mb-0">
              Copyright © 2022 Tyler Rilling. Distributed by an{' '}
              <a href="https://github.com/underlost/gatsby-just-the-docs/tree/main/LICENSE.txt">
                MIT license
              </a>
              .
            </p>

            <div className="d-flex mt-2">
              <p className={'text-small text-grey-dk-000 mb-0'}>
                {docsLocation && (
                  <Link
                    id="edit-this-page"
                    className={'gitBtn'}
                    to={`${docsLocation}/${mdx.parent.relativePath}`}
                  >
                    Edit this page on GitHub
                  </Link>
                )}
              </p>
            </div>
          </footer>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        title
        docsLocation
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      fields {
        id
        title
        slug
      }
      body
      tableOfContents
      parent {
        ... on File {
          relativePath
        }
      }
      frontmatter {
        metaTitle
        metaDescription
        show_toc
      }
    }
    allMdx {
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
`;
