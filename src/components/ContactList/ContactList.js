import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getContactsData, delContactData } from "redux/slices/contacts";

import { ContactListSection } from "components/ContactList/ContactList.style";
import { ContactListView } from "views/ContactListView";

export function ContactList() {
  const store = useSelector((store) => store.contacts.items);
  const filterData = useSelector((store) => store.filter);
  const dispatch = useDispatch();
  const [filteredArr, setFilteredArr] = useState([]);
  const [dataToDelete, setDataToDelete] = useState();

  const [showFilteredList, setShowFilteredList] = useState(false);
  const [showList, setShowList] = useState(false);

  const onDeleteHeandler = ({ target }) => {
    dispatch(delContactData(target.id));
    setDataToDelete(target.id);
  };

  useEffect(() => {
    dispatch(getContactsData());
  }, [dispatch]);

  useEffect(() => {
    if (filterData) {
      if (toString(filterData)) {
        setFilteredArr([
          ...store.filter((contact) => {
            return contact.name.indexOf(filterData.toLowerCase()) > -1;
          }),
        ]);
      }
      if (parseInt(filterData)) {
        setFilteredArr([
          ...store.filter((contact) => {
            return contact.number.indexOf(filterData) > -1;
          }),
        ]);
      }
    } else {
      setFilteredArr([]);
    }
  }, [filterData, store]);

  useEffect(() => {
    if (dataToDelete) {
      dispatch(getContactsData());
      setDataToDelete("");
    }
  }, [dataToDelete, dispatch]);

  useEffect(() => {
    if (filteredArr.length !== 0) {
      setShowList(false);
      setShowFilteredList(true);
    } else {
      setShowFilteredList(false);
      setShowList(true);
    }
  }, [filteredArr.length]);

  return (
    <div>
      <ContactListSection>
        {showList &&
          store.map((contactItem) => (
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
