import { Component } from "react";
import "./App.css";
import { ListItemSecondaryAction, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import MyCustomGrid from "./components/MyCustomGrid";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { palette } from "@mui/system";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";

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
        <>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/reports" element={<Reports />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </Router>
        </>
          
          
        </div>
      </ThemeProvider>
    );
  }
}
export default App;
