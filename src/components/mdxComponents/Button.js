import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import isAbsoluteUrl from 'is-absolute-url';

const Button = ({ children: link, className='btn', ...props }) => {
  if (link) {
    if (isAbsoluteUrl(props.href)) {
      return (
        <a className={className} href={props.href} target="_blank" rel="noopener noreferrer">
          {link}
        </a>
      );
    } else {
      return (
        <GatsbyLink classname={className} to={props.href} {...props}>
          {link}
        </GatsbyLink>
      );
    }
  } else {
    return null;
  }
};

export default Button;
