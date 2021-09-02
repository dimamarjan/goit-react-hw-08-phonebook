import styled from "@emotion/styled";

export const RegFormContainer = styled.form`
  margin-left: auto;
  margin-right: auto;
  width: 500px;
`;

export const ReginFormSection = styled.div`
  &.registration-main-container {
    display: flex;
    height: calc(100vh - 70px);
    background-color: rgb(33, 33, 33);
    padding-left: 150px;
    padding-right: 150px;
  }
  &.registration-input-container {
    margin-top: 30px;
  }
  &.registration-button-container {
    margin-top: 30px;
    margin-left: auto;
    margin-right: 0;
    width: fit-content;
  }
`;
