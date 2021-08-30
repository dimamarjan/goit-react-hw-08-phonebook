import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  NavBarContainer,
  NavBarLink,
  LinkContainer,
} from "components/NavBar/NavBar.style";
import { PrivatNavView } from "views/PrivatNavView/PrivatNavView";
import { PublicNavView } from "views/PublicNavView/PublicNavView";
import authSelectors from "redux/slices/auth/auth-selectors";

export function NavBar() {
  const isloggedStatus = useSelector(authSelectors.isCurrentUser);
  const [isPrivat, setIsPrivat] = useState(false);
  const [isPublic, setIsPublic] = useState(false);

  useEffect(() => {
    console.log("isloggedStatus = ", isloggedStatus);
    switch (isloggedStatus) {
      case "pending":
        setIsPrivat(false);
        setIsPublic(false);
        break;
      case "loaded":
        setIsPrivat(true);
        setIsPublic(false);
        break;
      case "rejected":
        setIsPrivat(false);
        setIsPublic(true);
        break;
      case "loggedOut":
        setIsPrivat(false);
        setIsPublic(true);
        break;
      default:
        break;
    }
  }, [isloggedStatus]);

  return (
    <NavBarContainer>
      <LinkContainer className="home-links">
        <NavBarLink to="/" exact>
          Home
        </NavBarLink>
      </LinkContainer>
      <LinkContainer>
        {isPrivat && <PrivatNavView />}
        {isPublic && <PublicNavView />}
      </LinkContainer>
    </NavBarContainer>
  );
}
