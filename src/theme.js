import { createMuiTheme } from "@material-ui/core/styles";
import { amber, deepOrange } from "@material-ui/core/colors";

export default createMuiTheme({
  palette: {
    primary: deepOrange,
    secondary: amber,
    type: "dark"
  },
  spacing: {
    unit: 10
  },
  typography: {
    useNextVariants: true
  },
  props: {
    MuiWithWidth: {
      initialWidth: "lg"
    }
  }
});
