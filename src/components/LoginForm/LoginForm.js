import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import authOperations from "redux/slices/auth/auth-operations";
import authSelectors from "redux/slices/auth/auth-selectors";

import {
  LoginFormContainer,
  LoginFormSection,
} from "components/LoginForm/LoginForm.style";
import { AllertMessage } from "views/AlertMessage/AllertMessage";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/core/styles";

import { costomTheme } from "utils/themes/inputFormTheme";
import { useButtonStyle } from "utils/styleHooks/buttonsHook";
import { BlackOut } from "utils/BlackOut";

export function LoginForm() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isFadeOut, setIsFadeOut] = useState(true);
  const [isLoadedPage, setIsLoadedPage] = useState(true);
  const { submitButton } = useButtonStyle();
  const isLogged = useSelector(authSelectors.loggedStatus);
  const dispatch = useDispatch();

  const onChangengeHeandler = ({ target }) => {
    switch (target.name) {
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
      authOperations.logIn({
        email: emailInput,
        password: passwordInput,
      })
    );
    setEmailInput("");
    setPasswordInput("");
  };

  useEffect(() => {
    if (isLoadedPage) {
      setIsFadeOut(false);
      let loadPage = setTimeout(() => {
        setIsLoadedPage(false);
      }, 950);
      return () => {
        clearTimeout(loadPage);
      };
    }
  }, [isLoadedPage]);

  return (
    <>
      {isLoadedPage && (
        <BlackOut
          className={isFadeOut ? "black-enter" : "black-enter unactive"}
        />
      )}
      <LoginFormSection className="login-main-container">
        <LoginFormContainer onSubmit={onSubmitHeandler}>
          <LoginFormSection className="login-input-container">
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
          </LoginFormSection>
          <LoginFormSection className="login-input-container">
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
          </LoginFormSection>
          <LoginFormSection className="login-button-container">
            <Button type="submit" className={submitButton} variant="outlined">
              LOGIN
            </Button>
          </LoginFormSection>
          {isLogged === "rejected" && <AllertMessage message={"LOGIN"} />}
        </LoginFormContainer>
      </LoginFormSection>
    </>
  );
}
