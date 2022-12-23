import React, { Component } from "react";
import { Button, Typography, ListItem, Input } from "@mui/material";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import Box from "@mui/material/Box";
/////////////////////////
/// HomeWork Day 3 Done by : Sean C. , Duncan, Alex

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  updateInput(key, value) {
    // update react state (Not using currently)
    this.setState({
      [key]: value,
    });
  }

  addItem() {
    // create item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };
    // copy of current list items
    const list = [...this.state.list];
    // add new item to list
    list.push(newItem);

    //update state with new list and reset newItem input
    this.setState({
      list,
      newItem: "",
    });
  }
  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];

    // filter out item being deleted
    const updatedList = list.filter((item) => item.id !== id);

    this.setState({ list: updatedList });
  }
  render() {
    return (
      <div>
        <Box sx={{ m: 2, borderRadius: 4, border: 2, fontWeight: "bold", textTransform: 'uppercase' }}>
          <Typography variant="h2">Honey-do List</Typography>
        </Box>
        <br />
        <Input label="Outlined secondary" color="secondary" focused
          sx={{ m: 2 , textTransform: 'uppercase'}}
          type="text"
          placeholder="Type item here....."
          value={this.state.newItem}
          onChange={(e) => this.updateInput("newItem", e.target.value)}
        />
        <br />
        <Button
          sx={{ m: 2 ,textTransform: 'uppercase',}}
          variant="contained"
          onClick={() => this.addItem()}
        >
          Add
        </Button>
        <br />
        <List
          sx={{
            borderRadius: 4,
            border: 2,
            gap: 2,
            mx: "auto",
            width: "80%",
            bgcolor: "background.paper",
          }}
        >
          {this.state.list.map((item) => {
            return (
              <ListItem
                key={item.id}
                secondaryAction={
                  <IconButton onClick={() => this.deleteItem(item.id)}>
                    <DoneOutlineIcon color="blue" />
                  </IconButton>
                }
              >
                <Typography variant="h4">{item.value}</Typography>
              </ListItem>
            );
          })}
        </List>
        <Box
          sx={{ m: 2, borderRadius: 4, border: 2, width: "75%", mx: "auto" }}
        >
          <Typography variant="subtitle2">
            check off items when finished!
          </Typography>
        </Box>
      </div>
    );
  }
}
