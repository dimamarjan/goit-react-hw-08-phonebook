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

export const NavBarLink = styled(NavLink)`
  text-decoration: none;
  &.active {
    color: rgb(255, 0, 0);
  }
`;

export const NavItemContainer = styled.div`
  display: flex;
  align-items: center;
  &.contact-nav-link {
    margin-left: 150px;
    margin-right: auto;
  }
  &.user-nav-link {
    margin-right: 150px;
    margin-left: auto;
  }
`;

export const UserName = styled.p`
  margin-right: 15px;
`;
