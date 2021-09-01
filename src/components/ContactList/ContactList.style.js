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

export const LabelContactsText = styled.span`
  display: flex;
  margin-top: 10px;
  color: rgba(250, 250, 250, 0.5);
  letter-spacing: 4px;
  justify-content: center;
`;

export const AccentText = styled.span`
  font-weight: 600;
  color: rgb(250, 250, 250);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding-right: 2px;
  padding-left: 2px;
`;

export const FilterForm = styled.div`
  &.filter-input-container {
    margin-top: 30px;
  }
`;
