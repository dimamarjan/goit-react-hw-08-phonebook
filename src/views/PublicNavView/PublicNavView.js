import {
  NavBarContainer,
  NavItemContainer,
  NavBarLink,
} from "views/PublicNavView/PublicNavView.style";

export function PublicNavView() {
  return (
    <NavBarContainer>
      <NavItemContainer className="home-nav-link">
        <NavBarLink to="/" exact>
          HOME
        </NavBarLink>
      </NavItemContainer>
      <NavItemContainer className="user-nav-link">
        <NavBarLink to="/login">LOGIN</NavBarLink>
        <NavBarLink to="/registration">SING UP</NavBarLink>
      </NavItemContainer>
    </NavBarContainer>
  );
}
