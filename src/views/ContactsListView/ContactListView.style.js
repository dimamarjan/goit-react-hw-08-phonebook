import styled from "@emotion/styled";

export const ContactListItem = styled.li`
  text-transform: capitalize;
  &:nth-of-type(odd) {
    margin-right: 20px;
  }
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const ContactTextContainer = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: 0;
`;
