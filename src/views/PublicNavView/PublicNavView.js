import { NavBarLink } from "views/PublicNavView/PublicNavView.style";

export function PublicNavView() {
  return (
    <>
      <NavBarLink to="/login">LOGIN</NavBarLink>
      <NavBarLink to="/registration">SING UP</NavBarLink>
    </>
  );
}
