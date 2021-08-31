import styled from "@emotion/styled";
import bcgImage from "images/city-bcg.jpg";

export const HomeContainer = styled.div`
  &.main-container {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url(${bcgImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  &.buttons-container {
    display: flex;
  }
  &.buttons {
    &:not(:last-child) {
      margin-right: 100px;
    }
  }
`;

export const NavButton = styled.span`
  text-decoration: none;
  color: #ffffff;
  font-size: 50px;
  font-weight: 800;
`;
