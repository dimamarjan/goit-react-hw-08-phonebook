import { NavBarLink, LinkContainer } from "views/NavBarView/NavBarView.style";

export function NavBarView() {
  return (
    <LinkContainer className="home-links">
      <NavBarLink to="/" exact>
        Home
      </NavBarLink>
    </LinkContainer>
  );
}
