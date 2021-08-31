import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { PrivatNavView } from "views/PrivatNavView/PrivatNavView";
import { PublicNavView } from "views/PublicNavView/PublicNavView";

import authSelectors from "redux/slices/auth/auth-selectors";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useNavStyle } from "utils/styleHooks/navHooks";

export function NavBar() {
  const isloggedStatus = useSelector(authSelectors.isCurrentUser);
  const [isPrivat, setIsPrivat] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const { root, appBar } = useNavStyle();

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
    <div className={root}>
      <AppBar position="static" className={appBar}>
        <Toolbar variant="dense">
          {isPrivat && <PrivatNavView />}
          {isPublic && <PublicNavView />}
        </Toolbar>
      </AppBar>
    </div>
  );
}
