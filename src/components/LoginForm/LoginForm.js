import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authOperations from "redux/slices/auth/auth-operations";

import {
  LoginFormContainer,
  LoginFormLabel,
  LoginLableText,
  LoginFormInput,
  LoginSubmitButton,
  LoginFormSection,
} from "components/LoginForm/LoginForm.style";

import PasswordField from "components/LoginForm/PasswordField/PasswordField";

import { BlackOut } from "utils/BlackOut";

export function LoginForm() {
  const dispatch = useDispatch();
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isFadeOut, setIsFadeOut] = useState(true);
  const [isLoadedPage, setIsLoadedPage] = useState(true);

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
      setTimeout(() => {
        setIsLoadedPage(false);
      }, 1000);
    }
    return () => {};
  }, [isLoadedPage]);

  return (
    <>
      {isLoadedPage && (
        <BlackOut
          className={isFadeOut ? "black-enter" : "black-enter unactive"}
        />
      )}
      <LoginFormContainer onSubmit={onSubmitHeandler}>
        <LoginFormSection>
          <LoginFormLabel>
            <LoginLableText>Login</LoginLableText>
            <LoginFormInput
              value={emailInput}
              className="login-input"
              name="login"
              type="mail"
              onChange={onChangengeHeandler}
            />
          </LoginFormLabel>
        </LoginFormSection>
        <LoginFormSection>
          <LoginFormLabel>
            <LoginLableText>Password</LoginLableText>
            <LoginFormInput
              value={passwordInput}
              className="paswd-input"
              name="paswd"
              type="password"
              onChange={onChangengeHeandler}
            />
            <PasswordField />
          </LoginFormLabel>
        </LoginFormSection>
        <LoginSubmitButton>Confirm</LoginSubmitButton>
      </LoginFormContainer>
    </>
  );
}
