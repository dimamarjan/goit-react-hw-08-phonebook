import { useState } from "react";
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

export function LoginForm() {
  const dispatch = useDispatch();
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

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

  return (
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
        </LoginFormLabel>
      </LoginFormSection>
      <LoginSubmitButton>Confirm</LoginSubmitButton>
    </LoginFormContainer>
  );
}
