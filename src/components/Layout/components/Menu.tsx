import React from "react";
import {Link, LinkProps, useMatch, useResolvedPath} from "react-router-dom";
import styled from "styled-components";

const Menu: React.FC<LinkProps> = ({children, to, ...props}) => {
    const resolved = useResolvedPath(to);
    const match = Boolean(useMatch({path: `${resolved.pathname}/*`, end: true}));
    return (
        <LinkMenu
            active={match}
            to={to}
            {...props}
        >
            {children}
        </LinkMenu>
    );
}

interface LinkMenu {
    active: boolean
}

const LinkMenu = styled(Link)<LinkMenu>`
  text-decoration: none;
  font-weight: ${props => props.active ? 700 : 500};
  color: ${props => props.active ? '#47b04b' : '#000000'};
`

export default Menu;