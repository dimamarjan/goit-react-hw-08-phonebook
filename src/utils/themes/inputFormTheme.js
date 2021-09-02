import { createTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

export const costomTheme = createTheme({
  palette: {
    primary: {
      main: red[50],
    },
  },
  overrides: {
    MuiFormControl: {
      root: {
        borderColor: "rgba(255, 255, 255, 0.53)",
      },
    },
    MuiFormLabel: {
      root: {
        color: "rgba(255, 255, 255, 0.53)",
      },
    },
    MuiInputBase: {
      input: {
        color: "red",
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: "rgba(255, 255, 255, 0.53)",
      },
    },
  },
});
