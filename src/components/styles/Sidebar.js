import styled from '@emotion/styled';

export const ListItem = styled(({ className, active, level, ...props }) => {
  return (
    <li className={className}>
      <a href={props.to} {...props}>
        {props.children}
      </a>
    </li>
  );
})`
  list-style: none;

  a {
    font-weight: ${({ level }) => (level === 0 ? 700 : 400)};

    ${props =>
      props.active &&
      `
    `} // external link icon
    svg {
      float: right;
      margin-right: 1rem;
    }
  }
`;
