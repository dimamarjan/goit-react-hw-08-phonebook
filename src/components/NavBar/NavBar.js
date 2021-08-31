import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { NavBarContainer, LinkContainer } from "components/NavBar/NavBar.style";

import { NavBarView } from "views/NavBarView/NavBarView";
import { PrivatNavView } from "views/PrivatNavView/PrivatNavView";
import { PublicNavView } from "views/PublicNavView/PublicNavView";

import authSelectors from "redux/slices/auth/auth-selectors";

export function NavBar() {
  const isloggedStatus = useSelector(authSelectors.isCurrentUser);
  const [isPrivat, setIsPrivat] = useState(false);
  const [isPublic, setIsPublic] = useState(false);

  useEffect(() => {
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
      <NavBarView />
      <LinkContainer>
        {isPrivat && <PrivatNavView />}
        {isPublic && <PublicNavView />}
      </LinkContainer>
    </NavBarContainer>
  );
}
