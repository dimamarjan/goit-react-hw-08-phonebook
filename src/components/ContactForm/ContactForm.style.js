import styled from "@emotion/styled";

export const FormPhoneBookContainer = styled.div`
  &.phonebook-main-container {
    position: static;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 70px);
    background-color: #212121;
    padding-left: 150px;
    padding-right: 150px;
    padding-bottom: 20px;
  }
  &.phonebook-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
  }
  &.phonebook-input-container {
    width: 300px;
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
  &.phonebook-button-container {
    display: flex;
    justify-content: center;
    width: 300px;
  }
`;

export const FormPhoneBook = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  padding-top: 30px;
`;
