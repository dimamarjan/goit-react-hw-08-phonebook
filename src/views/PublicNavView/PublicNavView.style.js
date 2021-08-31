import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavBarLink = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  left: 0;
  &:not(:last-child) {
    margin-right: 50px;
  }
  &.active {
    color: red;
  }
`;
