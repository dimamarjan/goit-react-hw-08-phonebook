import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  FormPhoneBookContainer,
  FormPhoneBook,
} from "components/ContactForm/ContactForm.style";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/core/styles";
import { costomTheme } from "utils/styleHooks/inputFormHook";
import { useButtonStyle } from "utils/styleHooks/buttonsHook";
import { Typography } from "@material-ui/core";
import { useHeaderStyle } from "utils/styleHooks/hederHook";

import { ContactList } from "components/ContactList/ContactList";

import { BlackOut } from "utils/BlackOut";
import { patterns } from "utils/patternsForm";

import contactsOperations from "redux/slices/contacts/contacts-operations";

export function ContactForm() {
  const [nameInpt, setNameInpt] = useState("");
  const [numberInpt, setNumberInpt] = useState("");
  const dispatch = useDispatch();
  const [isFadeOut, setIsFadeOut] = useState(true);
  const [isLoadedPage, setIsLoadedPage] = useState(true);
  const { submitButton } = useButtonStyle();
  const { headerStyle } = useHeaderStyle();

  const onChangeHendle = ({ target }) => {
    switch (target.name) {
      case "name":
        return setNameInpt(target.value);
      case "number":
        return setNumberInpt(target.value);
      default:
        return;
    }
  };

  const onSubmitHeandler = (eve) => {
    eve.preventDefault();
    dispatch(
      contactsOperations.addContact({
        name: nameInpt,
        number: numberInpt,
      })
    );
    setNameInpt("");
    setNumberInpt("");
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
      <FormPhoneBookContainer className="phonebook-main-container">
        <FormPhoneBookContainer className="phonebook-section">
          <Typography className={headerStyle} component="p">
            PHONEBOOK
          </Typography>
          <FormPhoneBook onSubmit={onSubmitHeandler}>
            <FormPhoneBookContainer className="phonebook-input-container">
              <ThemeProvider theme={costomTheme}>
                <TextField
                  inputProps={{
                    pattern: patterns.namePattern,
                    title: patterns.nameTitle,
                  }}
                  name="name"
                  label="NAME"
                  type="text"
                  variant="outlined"
                  value={nameInpt}
                  onChange={onChangeHendle}
                  fullWidth
                />
              </ThemeProvider>
            </FormPhoneBookContainer>
            <FormPhoneBookContainer className="phonebook-input-container">
              <ThemeProvider theme={costomTheme}>
                <TextField
                  inputProps={{
                    pattern: patterns.numberPattern,
                    title: patterns.numberTitle,
                  }}
                  name="number"
                  label="NUMBER"
                  type="text"
                  variant="outlined"
                  value={numberInpt}
                  onChange={onChangeHendle}
                  fullWidth
                />
              </ThemeProvider>
            </FormPhoneBookContainer>
            <FormPhoneBookContainer className="phonebook-button-container">
              <Button type="submit" className={submitButton} variant="outlined">
                Confirm
              </Button>
            </FormPhoneBookContainer>
          </FormPhoneBook>
          <ContactList />
        </FormPhoneBookContainer>
      </FormPhoneBookContainer>
    </>
  );
}
