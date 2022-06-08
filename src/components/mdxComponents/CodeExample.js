import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import isAbsoluteUrl from 'is-absolute-url';

const CodeExample = ({ children }) => {
  if (children) {
    return (
      <div className="code-example">
        {children}
      </div>
    );
  } else {
    return null;
  }
};

export default CodeExample;
