import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import React from "react";

import LinearProgress from "@mui/material/LinearProgress";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#00A94F",
    },
  },
});

const disabledBackgroundStyles = {
  width: "500%",
  height: "500%",
  position: "fixed",
  background: "#777",
  opacity: 0.8,
  zIndex: 100,
  margin: "-100%",
};

const Loader = (props) => (
  <ThemeProvider theme={customTheme}>
    <>
      <div
        style={{
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 200,
          textAlign: "center",
        }}
      >
        <LinearProgress color="primary" /> <br />
        <span className="mainheading" style={{ color: "white" }}>
          Please wait while the request is being processed
        </span>
      </div>
      <Box sx={disabledBackgroundStyles} />
    </>
  </ThemeProvider>
);

export default Loader;
