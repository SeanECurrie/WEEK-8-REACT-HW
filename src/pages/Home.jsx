import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as FaIcons from "react-icons/fa";

function Home() {
  return (
    <Box
      sx={{
        textTransform: "uppercase",
        textAlign: "left",
        backgroundColor: "secondary.dark",
        mr: 16,
        ml: 4,
        borderRadius: 4,
        border: 2,
        pb: 2,
        color: "black",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Miller Display",
          color: "black",
          letterSpacing: 7,
          p: 2,
          fontSize: 24,
          width: "80%",
        }}
      >
        This is my React homework and tinkering
      </Typography>
      <Typography
        sx={{
          fontSize: 14,
          gap: 2,
          p: 3,
          g: 2,
          mb: 6,
          fontWeight: "bold",
          width: "80%",
        }}
        variant="subtitle3"
      >
        So far i've incorparated:
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon sx={{ fontSize: 25 }}>
                <FaIcons.FaCheckCircle />
              </ListItemIcon>
              <ListItemText secondary="A fucntional side nav bar with routes and different pages" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon sx={{ fontSize: 25 }}>
                <FaIcons.FaCheckCircle />
              </ListItemIcon>
              <ListItemText secondary="This List, using Material UI and React Icons" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon sx={{ fontSize: 25 }}>
                <FaIcons.FaCheckCircle />
              </ListItemIcon>
              <ListItemText secondary="A custom Image Table" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon sx={{ fontSize: 25 }}>
                <FaIcons.FaCheckCircle />
              </ListItemIcon>
              <ListItemText secondary="A function To-Do list where items can be added and removed by the user" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon sx={{ fontSize: 25 }}>
                <FaIcons.FaCheckCircle />
              </ListItemIcon>
              <ListItemText secondary="A Login Form using Formik" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon sx={{ fontSize: 25 }}>
                <FaIcons.FaCheckCircle />
              </ListItemIcon>
              <ListItemText secondary="A custom Table with scroll bar and easily customizable features" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon sx={{ fontSize: 25 }}>
                <FaIcons.FaCheckCircle />
              </ListItemIcon>
              <ListItemText secondary="A custom Grid using Grid v2 from MUI. Its responsive and adapts to screen size and orientation." />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon sx={{ fontSize: 25 }}>
                <FaIcons.FaCheckCircle />
              </ListItemIcon>
              <ListItemText secondary="A over arching Theme, using ThemeProvider and palletes." />
            </ListItemButton>
          </ListItem>
        </List>
      </Typography>
    </Box>
  );
}

export default Home;
