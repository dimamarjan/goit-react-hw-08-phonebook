import { useState, useEffect } from "react";
import { BlackOut } from "utils/BlackOut";

import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { ContactsMainSection } from "components/Contacts/Contacts.style";

export function Contacts() {
  const [isFadeOut, setIsFadeOut] = useState(true);
  const [isLoadedPage, setIsLoadedPage] = useState(true);

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
      <ContactsMainSection>
        <ContactForm />
        <ContactList />
      </ContactsMainSection>
    </>
  );
}
