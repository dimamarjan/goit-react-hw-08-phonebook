import styled from "@emotion/styled";

export const BlackOut = styled.div`
  &.black-exit {
    opacity: 0;
    top: 0;
    position: absolute;
    z-index: 999;
    width: 100%;
    height: 0;
    background-color: #000000;

    transition: opacity 1s;
  }
  &.active {
    opacity: 1;
    height: 100vh;
  }
  &.black-enter {
    opacity: 1;
    top: 0;
    position: absolute;
    z-index: 999;
    width: 100%;
    height: 100vh;
    background-color: #000000;

    transition: opacity 1s;
  }
  &.unactive {
    opacity: 0;
  }
`;
