import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import "fontsource-roboto";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </MuiThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
