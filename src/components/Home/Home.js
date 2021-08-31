import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { HomeContainer } from "components/Home/Home.style";
import Button from "@material-ui/core/Button";
import { useButtonStyle } from "utils/styleHooks/buttonsHook";

import { NavButton } from "components/Home/Home.style";
import { BlackOut } from "utils/BlackOut";

export function Home() {
  const [isFadeIn, setIsFadeIn] = useState(false);
  const [isFadeOut, setIsFadeOut] = useState(true);
  const [isLoadedPage, setIsLoadedPage] = useState(true);
  const { homeButtonStyle } = useButtonStyle();
  let history = useHistory();

  const goToTimeout = ({ target }) => {
    setIsFadeIn(true);
    switch (target.textContent) {
      case "LOGIN":
        return setTimeout(() => {
          history.push("/login");
        }, 1000);
      case "SING UP":
        return setTimeout(() => {
          history.push("/registration");
        }, 1000);
      default:
        return;
    }
  };

  useEffect(() => {
    if (isLoadedPage) {
      setIsFadeOut(false);
      setTimeout(() => {
        setIsLoadedPage(false);
      }, 950);
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
      <BlackOut className={isFadeIn ? "black-exit active" : "black-exit"} />
      <HomeContainer
        className="main-container"
        onLoad={() => console.log("object")}
      >
        <HomeContainer className="buttons-container">
          <HomeContainer className="buttons">
            <Button className={homeButtonStyle} onClick={goToTimeout}>
              <NavButton>LOGIN</NavButton>
            </Button>
          </HomeContainer>
          <HomeContainer className="buttons">
            <Button className={homeButtonStyle} onClick={goToTimeout}>
              <NavButton>SING UP</NavButton>
            </Button>
          </HomeContainer>
        </HomeContainer>
      </HomeContainer>
    </>
  );
}
