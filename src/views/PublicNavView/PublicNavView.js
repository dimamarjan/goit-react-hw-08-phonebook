import {
  NavBarContainer,
  NavBarLink,
  LinkContainer,
} from "views/PublicNavView/PublicNavView.style";

export function PublicNavView() {
  return (
    <NavBarContainer>
      <LinkContainer className="user-links">
        <NavBarLink to="/login">Log in</NavBarLink>
        <NavBarLink to="/registration">Sing up</NavBarLink>
      </LinkContainer>
    </NavBarContainer>
  );
}
