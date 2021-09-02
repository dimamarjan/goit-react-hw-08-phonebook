import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  position: static;
  width: 100%;
  height: 70px;
`;

export const NavItemContainer = styled.div`
  display: flex;
  align-items: center;
  &.home-nav-link {
    margin-left: 150px;
    margin-right: auto;
  }
  &.user-nav-link {
    margin-right: 150px;
    margin-left: auto;
  }
`;

export const NavBarLink = styled(NavLink)`
  text-decoration: none;
  color: rgb(255, 255, 255);
  left: 0;
  &:not(:last-child) {
    margin-right: 50px;
  }
  &.active {
    color: rgb(255, 0, 0);
  }
`;
