import { NavBarContainer, NavBarLink, LinkContainer } from "./NavBar.style";

export function NavBar() {
  return (
    <NavBarContainer>
      <LinkContainer className="home-link">
        <NavBarLink>Home</NavBarLink>
      </LinkContainer>
      <LinkContainer className="user-links">
        <NavBarLink>Log in</NavBarLink>
        <NavBarLink>Sing up</NavBarLink>
      </LinkContainer>
    </NavBarContainer>
  );
}
