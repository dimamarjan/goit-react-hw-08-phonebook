import styled from "@emotion/styled";

export const ContactListSection = styled.ul`
  margin-left: 15px;
`;

export const ContactListItem = styled.li`
  text-transform: capitalize;
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const ContactItemText = styled.span``;

export const DelContactButton = styled.button`
  margin-left: 10px;
`;

export const ListHeader = styled.h2``;

export const LabelContacts = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  margin-left: 15px;
`;

export const LabelContactsText = styled.span`
  margin-bottom: 10px;
`;

export const AccentText = styled.span`
  text-decoration: underline;
  font-weight: 600;
`;

export const InputContacts = styled.input`
  width: 150px;
`;
