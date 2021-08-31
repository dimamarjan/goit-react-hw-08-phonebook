import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import authOperations from "redux/slices/auth/auth-operations";
import authSelectors from "redux/slices/auth/auth-selectors";

import contactsOperations from "redux/slices/contacts/contacts-operations";
import { clearContacts } from "redux/slices/contacts/contacts-slice";

import {
  NavBarLink,
  UserName,
  LogOutButton,
} from "views/PrivatNavView/PrivatNavView.style";

export function PrivatNavView() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const userStatus = useSelector(authSelectors.isCurrentUser);

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
    <>
      <NavBarLink to="/contacts" onClick={getContacts}>
        CONTACTS
      </NavBarLink>
      <UserName>{name ? name.toUpperCase() : ""}</UserName>
      <LogOutButton onClick={onLogOutHeandler}>LOGOUT</LogOutButton>
    </>
  );
}
