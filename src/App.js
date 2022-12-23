import { Component } from "react";
import "./App.css";
import { Typography } from "@mui/material";

import MyCustomGrid from "./components/MyCustomGrid";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

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
          <Typography variant="h1">This is my app</Typography>
          <Typography variant="h2">Hope you dig it.</Typography>
          <MyCustomGrid></MyCustomGrid>
        </div>
      </ThemeProvider>
    );
  }
}
export default App;
