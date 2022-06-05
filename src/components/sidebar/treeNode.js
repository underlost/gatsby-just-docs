import * as React from 'react';
import OpenedSvg from '../images/opened';
import ClosedSvg from '../images/closed';
import config from '../../../config';
import Link from '../link';

const TreeNode = ({ className = '', setCollapsed, collapsed, url, title, items, ...rest }) => {
  const isCollapsed = collapsed[url];

  const collapse = () => {
    setCollapsed(url);
  };

  const hasChildren = items.length !== 0;

  let location;

  if (typeof document != 'undefined') {
    location = document.location;
  }
  const active =
    location && (location.pathname === url || location.pathname === config.gatsby.pathPrefix + url);

  const calculatedClassName = `${className} nav-list-item item ${active ? 'active' : ''}`;

  return (
    <li className={calculatedClassName}>
      {title && (
        <Link className="nav-list-link" to={url}>
          {title}
          {!config.sidebar.frontLine && title && hasChildren ? (
            <button
              onClick={collapse}
              aria-label="collapse"
              className="collapser nav-list-expander"
              style={{
                background: `none`,
                borderWidth: `0px`,
              }}
            >
              {!isCollapsed ? <OpenedSvg /> : <ClosedSvg />}
            </button>
          ) : null}
        </Link>
      )}

      {!isCollapsed && hasChildren ? (
        <ul id="navbar" className="nav-list">
          {items.map((item, index) => (
            <TreeNode
              key={item.url + index.toString()}
              setCollapsed={setCollapsed}
              collapsed={collapsed}
              {...item}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default TreeNode;
