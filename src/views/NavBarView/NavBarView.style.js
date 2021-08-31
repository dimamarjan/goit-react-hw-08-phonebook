import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavBarLink = styled(NavLink)`
  text-decoration: none;
  margin-right: 200px;
  &.active {
    color: red;
  }
`;

export const LinkContainer = styled.div`
  &.home-links {
    margin-left: 200px;
  }
`;
