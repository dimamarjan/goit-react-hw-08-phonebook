import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  FormPhoneBookContainer,
  FormPhoneBook,
} from "components/ContactForm/ContactForm.style";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/core/styles";
import { costomTheme } from "utils/themes/inputFormTheme";
import { useButtonStyle } from "utils/styleHooks/buttonsHook";
import { Typography } from "@material-ui/core";
import { useHeaderStyle } from "utils/styleHooks/hederHook";

import { patterns } from "utils/patternsForm";

import contactsOperations from "redux/slices/contacts/contacts-operations";

export function ContactForm() {
  const [nameInpt, setNameInpt] = useState("");
  const [numberInpt, setNumberInpt] = useState("");
  const { submitButton } = useButtonStyle();
  const { headerStyle } = useHeaderStyle();
  const dispatch = useDispatch();

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

  return (
    <>
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
    </>
  );
}
