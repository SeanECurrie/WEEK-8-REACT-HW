import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import MyCustomButton from "../components/MyCustomButton";
import MyCustomIMGTable from "../components/MyCustomIMGTable";
import MyCustomTable from "../components/MyCustomTable";
import ToDoList from "../components/ToDoList";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default class MyCustomGrid extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Box sx={{ gap: 2, p: 2, mx: "auto", width: "95%", flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item={true} xs={6}>
              <Item>
                <ToDoList />
              </Item>
            </Grid>
            <Grid item={true} xs={6}>
              <Item>
                <MyCustomButton />
              </Item>
            </Grid>
            <Grid item={true} xs={12}>
              <Item sx={{
              backgroundColor: "primary.dark",
              borderRadius: 4,
              
              p: 4,

            }}>
                <MyCustomTable />
              </Item>
            </Grid>
            <Grid item={true} xs={8}>
              <Item>
                <MyCustomIMGTable/>
              </Item>
            </Grid>

            <Grid item={true} xs={4}>
              <Item>
                <Typography variant="h1">
                  This is a responsive grid box
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}
