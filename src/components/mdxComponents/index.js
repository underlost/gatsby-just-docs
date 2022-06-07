import * as React from 'react';

import CodeBlock from './codeBlock';
import AnchorTag from './anchor';
import Button from './Button';
import CodeExample from './CodeExample'

const appendString = (children) => {
  if (Array.isArray(children)) {
    return children.reduce((acc, current) => {
      if (typeof current === 'string') {
        return acc.concat(current);
      } else if (typeof current === 'object') {
        return acc.concat(current.props.children);
      } else {
        return acc;
      }
    }, '');
  } else {
    return children;
  }
};

export default {
  h1: (props) => (
    <h1
      className="heading1"
      id={appendString(props.children).replace(/\s+/g, '').toLowerCase()}
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="heading2"
      id={appendString(props.children).replace(/\s+/g, '').toLowerCase()}
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="heading3"
      id={appendString(props.children).replace(/\s+/g, '').toLowerCase()}
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className="heading4"
      id={appendString(props.children).replace(/\s+/g, '').toLowerCase()}
      {...props}
    />
  ),
  h5: (props) => (
    <h5
      className="heading5"
      id={appendString(props.children).replace(/\s+/g, '').toLowerCase()}
      {...props}
    />
  ),
  h6: (props) => (
    <h6
      className="heading6"
      id={appendString(props.children).replace(/\s+/g, '').toLowerCase()}
      {...props}
    />
  ),
  p: (props) => <p className="paragraph" {...props} />,
  code: CodeBlock,
  a: AnchorTag,
  Button: Button,
  CodeExample: CodeExample,
  // TODO add `img`
  // TODO add `blockquote`
  // TODO add `ul`
  // TODO add `li`
  // TODO add `table`
};
