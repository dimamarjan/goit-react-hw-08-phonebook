import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authOperations from "redux/slices/auth/auth-operations";

import {
  RegFormContainer,
  ReginFormLabel,
  ReginLableText,
  ReginFormInput,
  ReginSubmitButton,
  ReginFormSection,
} from "components/RegistrationForm/RegistrationForm.style";

import { BlackOut } from "utils/BlackOut";

export function RegistrationForm() {
  const dispatch = useDispatch();
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isFadeOut, setIsFadeOut] = useState(true);
  const [isLoadedPage, setIsLoadedPage] = useState(true);

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
      <RegFormContainer onSubmit={onSubmitHeandler}>
        <ReginFormSection>
          <ReginFormLabel>
            <ReginLableText>Name</ReginLableText>
            <ReginFormInput
              value={nameInput}
              className="name-input"
              name="name"
              type="name"
              onChange={onChangengeHeandler}
            />
          </ReginFormLabel>
        </ReginFormSection>
        <ReginFormSection>
          <ReginFormLabel>
            <ReginLableText>Login</ReginLableText>
            <ReginFormInput
              value={emailInput}
              className="login-input"
              name="login"
              type="email"
              onChange={onChangengeHeandler}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
            />
          </ReginFormLabel>
        </ReginFormSection>
        <ReginFormSection>
          <ReginFormLabel>
            <ReginLableText>Password</ReginLableText>
            <ReginFormInput
              value={passwordInput}
              className="paswd-input"
              name="paswd"
              type="password"
              onChange={onChangengeHeandler}
            />
          </ReginFormLabel>
        </ReginFormSection>
        <ReginSubmitButton>Confirm</ReginSubmitButton>
      </RegFormContainer>
    </>
  );
}
