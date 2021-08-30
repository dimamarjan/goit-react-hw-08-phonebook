import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;
  position: static;
  width: 100%;
  height: 60px;
`;

export const NavBarLink = styled(NavLink)`
  text-decoration: none;
  margin-right: 50px;
  &.active {
    color: red;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 200px;
  margin-left: auto;
`;

export const UserName = styled.p`
  margin-right: 15px;
`;

export const LogOutButton = styled.button``;
