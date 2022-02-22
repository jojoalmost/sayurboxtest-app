import React from "react";
import {Link, LinkProps, useMatch, useResolvedPath} from "react-router-dom";
import styled from "styled-components";

const Menu: React.FC<LinkProps> = ({children, to, ...props}) => {
    const resolved = useResolvedPath(to);
    const match = Boolean(useMatch({path: `${resolved.pathname}/*`, end: true}));
    return (
        <>
            {
                match ? (
                    <LinkActive
                        to={to}
                        {...props}
                    >
                        {children}
                    </LinkActive>
                ) : (
                    <LinkMenu to={to}
                              {...props}>
                        {children}
                    </LinkMenu>
                )
            }
        </>
    );
}

const LinkActive = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  color: #47b04b;
`

const LinkMenu = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  color: #000000;
`

export default Menu;