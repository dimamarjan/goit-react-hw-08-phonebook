import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavBarLink = styled(NavLink)`
  &.nav-links {
    color: white;
    text-decoration: none;
  }
  &.active {
    color: red;
  }
`;

export const navStyle = {
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "rgb(0, 0, 0)",
  },
};
