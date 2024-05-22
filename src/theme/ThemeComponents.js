import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          fontFamily: "Cairo",
          color:"inherit",
        },
      },
    },
    MuiIconButton:{
      styleOverrides: {
        root: {
          color:"red",
        },
      },
    },
    MuiMenuItem:{
      styleOverrides: {
        root: {
          color:"inherit !important",
        },
      },
    },
    MuiPaper:{
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: "Cairo",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Cairo",
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Cairo',
        },
      },
    },
    MuiStepper: {
      styleOverrides: {
        root: {
          fontFamily: 'Cairo, sans-serif',
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          fontFamily: 'inherit',
        },
      },
    },
  },
});

export default theme;
