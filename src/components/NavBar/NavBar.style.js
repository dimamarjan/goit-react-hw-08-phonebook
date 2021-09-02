import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavBarLink = styled(NavLink)`
  &.nav-links {
    color: rgb(255, 255, 255);
    text-decoration: none;
  }
  &.active {
    color: rgb(255, 0, 0);
  }
`;
