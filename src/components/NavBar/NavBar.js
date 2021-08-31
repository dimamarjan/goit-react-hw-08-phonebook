import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { NavBarLink, navStyle } from "components/NavBar/NavBar.style";

import { PrivatNavView } from "views/PrivatNavView/PrivatNavView";
import { PublicNavView } from "views/PublicNavView/PublicNavView";

import authSelectors from "redux/slices/auth/auth-selectors";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

export function NavBar() {
  const isloggedStatus = useSelector(authSelectors.isCurrentUser);
  const [isPrivat, setIsPrivat] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const useStyles = makeStyles(() => navStyle);

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
    <div className={useStyles().root}>
      <AppBar position="static" className={useStyles().appBar}>
        <Toolbar variant="dense">
          {isPublic && (
            <NavBarLink className="nav-links" to="/" exact>
              HOME
            </NavBarLink>
          )}
          {isPrivat && <PrivatNavView />}
          {isPublic && <PublicNavView />}
        </Toolbar>
      </AppBar>
    </div>
  );
}
