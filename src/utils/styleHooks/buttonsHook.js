import { makeStyles } from "@material-ui/core/styles";

export const useButtonStyle = makeStyles({
  buttonStyle: {
    boxShadow: "0 3px 5px 2px rgba(255, 255, 255, .3)",
    color: "white",
    height: 48,
    padding: "10px 30px",
    border: "2px solid white",
  },
  homeButtonStyle: {
    boxShadow: "0 3px 5px 2px rgba(255, 255, 255, .3)",
    color: "white",
    height: 48,
    padding: "40px 30px",
    border: "2px solid white",
  },
  submitButton: {
    color: "white",
    height: 48,
    padding: "10px 30px",
    border: "2px solid white",
  },
});
