import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import contactsSelectors from "redux/slices/contacts/contacts-selectors";
import contactsOperations from "redux/slices/contacts/contacts-operations";

import {
  LabelContactsText,
  AccentText,
  FilterForm,
  ContactListSection,
} from "components/ContactList/ContactList.style";
import { ContactListView } from "views/ContactsListView/ContactListView";

import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { costomTheme } from "utils/themes/inputFormTheme";
import { useHeaderStyle } from "utils/styleHooks/hederHook";

export function ContactList() {
  const isLoadedContacts = useSelector(contactsSelectors.contactsLodedStatus);
  const contactsList = useSelector(contactsSelectors.contactsData);
  const [isShowContacts, setIsShowContacts] = useState(false);
  const [showFilteredList, setShowFilteredList] = useState(false);
  const [filter, setFilter] = useState("");
  const [filteredArr, setFilteredArr] = useState([]);
  const { headerStyle } = useHeaderStyle();

  const dispatch = useDispatch();

  const onFilterChange = ({ target }) => {
    setFilter(target.value);
  };

  const onDeleteHeandler = ({ target }) => {
    dispatch(contactsOperations.delContact(target.parentElement.id));
  };

  useEffect(() => {
    if (filter) {
      if (toString(filter)) {
        setFilteredArr([
          ...contactsList.filter((contact) => {
            return contact.name.indexOf(filter.toLowerCase()) > -1;
          }),
        ]);
      }
      if (parseInt(filter)) {
        setFilteredArr([
          ...contactsList.filter((contact) => {
            return contact.number.indexOf(filter) > -1;
          }),
        ]);
      }
    } else {
      setFilteredArr([]);
    }
  }, [contactsList, filter]);

  useEffect(() => {
    if (isLoadedContacts === "fulfilled") {
      setIsShowContacts(true);
    }
  }, [contactsList, isLoadedContacts]);

  useEffect(() => {
    if (isLoadedContacts === "changed") {
      dispatch(contactsOperations.getContacts());
    }
  }, [dispatch, isLoadedContacts]);

  useEffect(() => {
    if (filter) {
      setIsShowContacts(false);
      setShowFilteredList(true);
    } else {
      setShowFilteredList(false);
      if (isLoadedContacts === "fulfilled") {
        setIsShowContacts(true);
      }
    }
  }, [filter, isLoadedContacts]);

  return (
    <>
      <Typography className={headerStyle} component="p">
        CONTACTS
      </Typography>
      <LabelContactsText>
        FIND CONTACTS BY USING <br />
        <AccentText>NAME</AccentText> OR <AccentText>NUMBER</AccentText>
      </LabelContactsText>

      <FilterForm className="filter-input-container">
        <ThemeProvider theme={costomTheme}>
          <TextField
            name="name"
            label="NAME OR NUMBER"
            type="text"
            variant="outlined"
            value={filter}
            onChange={onFilterChange}
            fullWidth
          />
        </ThemeProvider>
      </FilterForm>

      <ContactListSection>
        {isShowContacts &&
          contactsList.map((contactItem) => (
            <ContactListView
              key={contactItem.id}
              data={contactItem}
              onDelete={onDeleteHeandler}
            />
          ))}
        {showFilteredList &&
          filteredArr.map((contactItem) => (
            <ContactListView
              key={contactItem.id}
              data={contactItem}
              onDelete={onDeleteHeandler}
            />
          ))}
      </ContactListSection>
    </>
  );
}
