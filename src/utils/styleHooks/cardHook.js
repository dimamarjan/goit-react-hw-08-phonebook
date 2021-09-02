import { makeStyles } from "@material-ui/core/styles";

export const useCardStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    maxWidth: 275,
    backgroundColor: "#212121",
    padding: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    "& :last-child": {
      paddingBottom: 0,
    },
  },
  container: {
    padding: "0",
  },
  title: {
    fontSize: "14px",
    color: "#ffffff",
    textAlign: "center",
    width: "253px",
    overflow: "hidden",
    "&:nth-child(2n)": {
      color: "#ff8989",
    },
    "&:not(:last-child)": {
      marginBottom: "5px",
    },
  },
});
