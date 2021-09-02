import styled from "@emotion/styled";

export const FormPhoneBookContainer = styled.div`
  &.phonebook-input-container {
    width: 300px;
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;

export const FormPhoneBook = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  padding-top: 30px;
`;
