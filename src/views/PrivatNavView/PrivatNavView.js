import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import authOperations from "redux/slices/auth/auth-operations";
import authSelectors from "redux/slices/auth/auth-selectors";

import contactsOperations from "redux/slices/contacts/contacts-operations";
import { clearContacts } from 'redux/slices/contacts/contacts-slice';

import {
  NavBarContainer,
  LinkContainer,
  NavBarLink,
  UserName,
  LogOutButton,
} from "views/PrivatNavView/PrivatNavView.style";

export function PrivatNavView() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const userStatus = useSelector(authSelectors.isCurrentUser)

  const onLogOutHeandler = () => {
    dispatch(authOperations.logOut());
  };

  const getContacts = () => {
    dispatch(contactsOperations.getContacts());
  };

  useEffect(() => {
    if (userStatus === "loggedOut") {
      console.log("clear contacts = ", userStatus)
      dispatch(clearContacts());
    }
  }, [dispatch, userStatus])

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  })

  return (
    <NavBarContainer>
      <LinkContainer>
        <NavBarLink to="/contacts" onClick={getContacts}>
          Contacts list
        </NavBarLink>
        <UserName>{name}</UserName>
        <LogOutButton onClick={onLogOutHeandler}>Log Out</LogOutButton>
      </LinkContainer>
    </NavBarContainer>
  );
}
