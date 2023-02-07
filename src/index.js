import React from "react";
import ReactDOM from "react-dom";
import CarbonProvider from "carbon-react/lib/components/carbon-provider";
import sageTheme from "carbon-react/lib/style/themes/sage";
import GlobalStyle from "carbon-react/lib/style/global-style";
import "carbon-react/lib/style/fonts.css";

import App from "./App";

ReactDOM.render(
  <CarbonProvider theme={sageTheme}>
    <GlobalStyle />
    <App />
  </CarbonProvider>,
  document.getElementById("app")
);
