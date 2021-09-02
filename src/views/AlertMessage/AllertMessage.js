import {
  AlertContainer,
  AlertMessageText,
} from "views/AlertMessage/AllertMessage.style";

export function AllertMessage({ message }) {
  return (
    <AlertContainer>
      <AlertMessageText>
        {message} ERROR! TRY AGAIN, BUT CAREFULLY 😈
      </AlertMessageText>
    </AlertContainer>
  );
}
