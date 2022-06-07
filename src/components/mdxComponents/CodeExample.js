import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import isAbsoluteUrl from 'is-absolute-url';

const CodeExample = ({ children }) => {
  if (children) {
    return (
      <div class="code-example">
        {children}
      </div>
    );
  } else {
    return null;
  }
};

export default CodeExample;
