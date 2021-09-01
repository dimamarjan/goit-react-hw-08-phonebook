import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authOperations from "redux/slices/auth/auth-operations";

import {
  RegFormContainer,
  ReginFormSection,
} from "components/RegistrationForm/RegistrationForm.style";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/core/styles";
import { costomTheme } from "utils/styleHooks/inputFormHook";
import { useButtonStyle } from "utils/styleHooks/buttonsHook";

import { BlackOut } from "utils/BlackOut";

export function RegistrationForm() {
  const dispatch = useDispatch();
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isFadeOut, setIsFadeOut] = useState(true);
  const [isLoadedPage, setIsLoadedPage] = useState(true);
  const { submitButton } = useButtonStyle();

  const onChangengeHeandler = ({ target }) => {
    switch (target.name) {
      case "name":
        setNameInput(target.value);
        break;
      case "login":
        setEmailInput(target.value);
        break;
      case "paswd":
        setPasswordInput(target.value);
        break;
      default:
        return;
    }
  };

  const onSubmitHeandler = (eve) => {
    eve.preventDefault();
    dispatch(
      authOperations.register({
        name: nameInput,
        email: emailInput,
        password: passwordInput,
      })
    );
    setNameInput("");
    setEmailInput("");
    setPasswordInput("");
  };

  useEffect(() => {
    if (isLoadedPage) {
      setIsFadeOut(false);
      setTimeout(() => {
        setIsLoadedPage(false);
      }, 950);
    }
  }, [isLoadedPage]);

  return (
    <>
      {isLoadedPage && (
        <BlackOut
          className={isFadeOut ? "black-enter" : "black-enter unactive"}
        />
      )}
      <ReginFormSection className="registration-main-container">
        <RegFormContainer onSubmit={onSubmitHeandler}>
          <ReginFormSection className="registration-input-container">
            <ThemeProvider theme={costomTheme}>
              <TextField
                name="name"
                label="NAME"
                type="name"
                variant="outlined"
                value={nameInput}
                onChange={onChangengeHeandler}
                fullWidth
              />
            </ThemeProvider>
          </ReginFormSection>
          <ReginFormSection className="registration-input-container">
            <ThemeProvider theme={costomTheme}>
              <TextField
                name="login"
                label="EXAMPLE@MAIL.COM"
                type="email"
                variant="outlined"
                value={emailInput}
                onChange={onChangengeHeandler}
                fullWidth
              />
            </ThemeProvider>
          </ReginFormSection>
          <ReginFormSection className="registration-input-container">
            <ThemeProvider theme={costomTheme}>
              <TextField
                name="paswd"
                label="PASSWORD"
                type="password"
                variant="outlined"
                value={passwordInput}
                onChange={onChangengeHeandler}
                fullWidth
              />
            </ThemeProvider>
          </ReginFormSection>
          <ReginFormSection className="registration-button-container">
            <Button type="submit" className={submitButton} variant="outlined">
              Confirm
            </Button>
          </ReginFormSection>
        </RegFormContainer>
      </ReginFormSection>
    </>
  );
}
