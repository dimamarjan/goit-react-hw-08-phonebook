import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  FormPhoneBook,
  FormHeader,
  LabelForm,
  LabelText,
  InputForm,
  SubmitButton,
} from "components/ContactForm/ContactForm.style";

import { BlackOut } from "utils/BlackOut";

import contactsOperations from "redux/slices/contacts/contacts-operations";

export function ContactForm() {
  const [nameInpt, setNameInpt] = useState("");
  const [numberInpt, setNumberInpt] = useState("");
  const dispatch = useDispatch();
  const [isFadeOut, setIsFadeOut] = useState(true);
  const [isLoadedPage, setIsLoadedPage] = useState(true);

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
      <FormHeader>Phonebook</FormHeader>
      <FormPhoneBook onSubmit={onSubmitHeandler}>
        <LabelForm>
          <LabelText>Name</LabelText>
          <InputForm
            onChange={onChangeHendle}
            value={nameInpt}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          ></InputForm>
        </LabelForm>
        <LabelForm>
          <LabelText>Number</LabelText>
          <InputForm
            onChange={onChangeHendle}
            value={numberInpt}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          ></InputForm>
        </LabelForm>
        <SubmitButton>Add contact</SubmitButton>
      </FormPhoneBook>
    </>
  );
}
