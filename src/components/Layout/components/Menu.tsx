import React from "react";
import {Link, LinkProps, useMatch, useResolvedPath} from "react-router-dom";
import styled from "styled-components";

const Menu: React.FC<LinkProps> = ({children, to, ...props}) => {
    const resolved = useResolvedPath(to);
    const match = Boolean(useMatch({path: `${resolved.pathname}/*`, end: true}));
    return (
        <LinkMenu
            isActive={match}
            to={to}
            {...props}
        >
            {children}
        </LinkMenu>
    );
}

interface LinkMenu {
    isActive: boolean
}

const LinkMenu = styled(Link)<LinkMenu>`
  text-decoration: none;
  font-weight: ${props => props.isActive ? 700 : 500};
  color: ${props => props.isActive ? '#47b04b' : '#000000'};
`

export default Menu;