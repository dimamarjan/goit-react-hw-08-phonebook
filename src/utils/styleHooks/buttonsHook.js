import { makeStyles } from "@material-ui/core/styles";

export const useButtonStyle = makeStyles({
  buttonStyle: {
    boxShadow: "0 3px 5px 2px rgba(255, 255, 255, .3)",
    color: "rgb(255, 255, 255)",
    height: "48",
    padding: "10px 30px",
    border: "2px solid rgb(255, 255, 255)",
  },
  submitButton: {
    color: "rgb(255, 255, 255)",
    height: "48",
    padding: "10px 30px",
    border: "2px solid white",
  },
  delButton: {
    color: "rgba(255, 255, 255, 0.53)",
    borderColor: "rgba(255, 255, 255, 0.53)",
  },
});
