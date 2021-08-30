const contactsLodedStatus = (state) => state.contacts.status;

const contactsData = (state) => state.contacts.contacts;

const contactsSelectors = {
  contactsLodedStatus,
  contactsData,
};

export default contactsSelectors;
