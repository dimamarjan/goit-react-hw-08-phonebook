import { NavBarContainer, NavBarLink, LinkContainer } from "./NavBar.style";

export function NavBar() {
  return (
    <NavBarContainer>
      <LinkContainer className="home-links">
        <NavBarLink to="/" exact>
          Home
        </NavBarLink>
        <NavBarLink to="/contacts">Contacts list</NavBarLink>
      </LinkContainer>
      <LinkContainer className="user-links">
        <NavBarLink to="/login">Log in</NavBarLink>
        <NavBarLink to="/registration">Sing up</NavBarLink>
      </LinkContainer>
    </NavBarContainer>
  );
}
