import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import contactsSelectors from "redux/slices/contacts/contacts-selectors";
import contactsOperations from "redux/slices/contacts/contacts-operations";

import { ContactListSection } from "components/ContactList/ContactList.style";
import { ContactListView } from "views/ContactsListView/ContactListView";

import {
  ListHeader,
  LabelContacts,
  LabelContactsText,
  InputContacts,
  AccentText,
} from "components/Filter/Filter.style";

export function ContactList() {
  const isLoadedContacts = useSelector(contactsSelectors.contactsLodedStatus);
  const contactsList = useSelector(contactsSelectors.contactsData);

  const [isShowContacts, setIsShowContacts] = useState(false);
  const [showFilteredList, setShowFilteredList] = useState(false);
  const [filter, setFilter] = useState("");
  const [filteredArr, setFilteredArr] = useState([]);

  const dispatch = useDispatch();

  const onFilterChange = ({ target }) => {
    setFilter(target.value);
  };

  const onDeleteHeandler = ({ target }) => {
    dispatch(contactsOperations.delContact(target.id));
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
    if (filter) {
      setIsShowContacts(false);
      setShowFilteredList(true);
    } else {
      setShowFilteredList(false);
      setIsShowContacts(true);
    }
  }, [filter]);

  useEffect(() => {
    if (isLoadedContacts === "changed") {
      dispatch(contactsOperations.getContacts());
    }
  }, [dispatch, isLoadedContacts]);

  return (
    <div>
      <ListHeader>Contacts</ListHeader>
      <LabelContacts>
        <LabelContactsText>
          Find contacts by <AccentText>name</AccentText> or
          <AccentText>number</AccentText>
        </LabelContactsText>
        <InputContacts name="filter" onChange={onFilterChange} value={filter} />
      </LabelContacts>

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
    </div>
  );
}
