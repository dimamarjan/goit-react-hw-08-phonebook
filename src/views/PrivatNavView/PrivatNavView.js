import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import { useButtonStyle } from "utils/styleHooks/buttonsHook";

import authOperations from "redux/slices/auth/auth-operations";
import authSelectors from "redux/slices/auth/auth-selectors";

import contactsOperations from "redux/slices/contacts/contacts-operations";
import { clearContacts } from "redux/slices/contacts/contacts-slice";

import {
  NavBarContainer,
  ItemContainer,
  NavBarLink,
  UserName,
} from "views/PrivatNavView/PrivatNavView.style";

export function PrivatNavView() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const userStatus = useSelector(authSelectors.isCurrentUser);
  const { buttonStyle } = useButtonStyle();

  console.log(clearContacts);

  const onLogOutHeandler = () => {
    dispatch(authOperations.logOut());
  };

  const getContacts = () => {
    dispatch(contactsOperations.getContacts());
  };

  useEffect(() => {
    if (userStatus === "loggedOut") {
      dispatch(clearContacts());
    }
  }, [dispatch, userStatus]);

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  return (
    <NavBarContainer>
      <ItemContainer className="contact-nav-link">
        <NavBarLink to="/contacts" onClick={getContacts}>
          CONTACTS
        </NavBarLink>
      </ItemContainer>
      <ItemContainer className="user-nav-link">
        <UserName>{name ? name.toUpperCase() : ""}</UserName>
        <Button
          className={buttonStyle}
          variant="outlined"
          onClick={onLogOutHeandler}
        >
          LOGOUT
        </Button>
      </ItemContainer>
    </NavBarContainer>
  );
}
