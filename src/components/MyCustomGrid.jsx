import React, { Component } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from "@mui/material";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default class MyCustomGrid extends Component {
    constructor() {
      super();
      this.state = {
        
      };
    }
      render() {

      return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={8}>
          <Item><Typography variant="h1">Responsive Grid</Typography></Item>
        </Grid>
        <Grid xs={4}>
          <Item><Typography variant="h6">Responsive Grid</Typography></Item>
        </Grid>
        <Grid xs={4}>
          <Item><Typography variant="h4">Responsive Grid</Typography></Item>
        </Grid>
        <Grid xs={8}>
          <Item><Typography variant="h2">Responsive Grid</Typography></Item>
        </Grid>
      </Grid>
    </Box>
    </div>
      );
    }

  }