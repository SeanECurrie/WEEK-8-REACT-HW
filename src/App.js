import { Component } from "react";
import "./App.css";
import { ListItemSecondaryAction, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import MyCustomGrid from "./components/MyCustomGrid";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { palette } from "@mui/system";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

class App extends Component {
  constructor() {
    super();
    this.state = "";
  }

  render() {
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <div className="App">
          <Box
            sx={{
              textTransform: 'uppercase',
              textAlign: "left",
              backgroundColor: "secondary.dark",
              mr: 16,
              ml:4,
              borderRadius: 4,
              border: 2,
              pb:2,
              color : 'black',
            }}
          >
            <Typography
              
              sx={{
                fontFamily : 'Miller Display',
                color : 'black',
                letterSpacing : 7,
                p:2,
                fontSize : 24,
                width: "80%",
              }}
              
            >
              This is my React homework and tinkering
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                gap: 2,
                p: 3,
                g:2,
                mb:6,

                width: "80%",
              }}
              variant="subtitle3"
            >
              This page is mostly for testing out Material UI things likeGrid
              v2, typography and linking together components and different stuff
              i've done through class.
            </Typography>
          </Box>
          <MyCustomGrid></MyCustomGrid>
        </div>
      </ThemeProvider>
    );
  }
}
export default App;
