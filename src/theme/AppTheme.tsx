import React from "react";
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { purpleTheme } from "./index";

interface Props {
  children: React.ReactNode;
}

export const AppTheme: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={purpleTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
