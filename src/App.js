import { Component } from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IMGTable from "./pages/IMGTable";
import Grid from "./pages/Grid";
import Navbar from "./components/Navbar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

class App extends Component {


  render() {
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <div className="App">
          <>
            <Router>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/IMGTable" element={<IMGTable />} />
                <Route path="/Grid" element={<Grid />} />
              </Routes>
            </Router>
          </>
        </div>
      </ThemeProvider>
    );
  }
}
export default App;
