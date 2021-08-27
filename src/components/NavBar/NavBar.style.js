import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;
  position: static;
  width: 100%;
  height: 60px;
  border-bottom: 2px solid black;
`;

export const NavBarLink = styled(Link)`
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 50px;
  }
`;

export const LinkContainer = styled.div`
  &.home-link {
    margin-left: 200px;
  }
  &.user-links {
    margin-right: 200px;
    margin-left: auto;
  }
`;
