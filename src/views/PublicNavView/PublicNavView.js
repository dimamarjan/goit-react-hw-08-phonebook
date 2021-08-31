import {
  NavBarContainer,
  ItemContainer,
  NavBarLink,
} from "views/PublicNavView/PublicNavView.style";

export function PublicNavView() {
  return (
    <NavBarContainer>
      <ItemContainer className="home-nav-link">
        <NavBarLink to="/" exact>
          HOME
        </NavBarLink>
      </ItemContainer>
      <ItemContainer className="user-nav-link">
        <NavBarLink to="/login">LOGIN</NavBarLink>
        <NavBarLink to="/registration">SING UP</NavBarLink>
      </ItemContainer>
    </NavBarContainer>
  );
}
