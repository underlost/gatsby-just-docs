import React, { useState } from 'react';
import config from '../../../config';
import Link from '../link';

const TreeNode = ({ className = '', setCollapsed, collapsed, url, title, items, ...rest }) => {

  const [toggleState, setToggleState] = useState(false);
  const toggleItem = () => {
    setToggleState((state) => (state === false ? true : false));
  };

  const hasChildren = items.length !== 0;

  let location;

  if (typeof document != 'undefined') {
    location = document.location;
  }
  const active =
    location && (location.pathname === url || location.pathname === config.gatsby.pathPrefix + url);

  const calculatedClassName = `${className} nav-list-item item ${active ? 'active' : ''} ${
    toggleState ? 'istoggled' : ''
  }`;

  return (
    <li className={calculatedClassName}>
      {title && (
        <>
          <Link className="nav-list-link" to={url}>
            {title}
          </Link>
          {!config.sidebar.frontLine && title && hasChildren ? (
            <button
              onClick={toggleItem}
              aria-label="collapse"
              className="collapser nav-list-expander"
            >
              <svg height="16" width="16" viewBox="0 0 24 24">
                <use xlinkHref="#svg-arrow-right"></use>
              </svg>
            </button>
          ) : null}
        </>
      )}

      {hasChildren ? (
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
