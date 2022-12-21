import React, { Component } from "react";
import {Button } from "@mui/material";


export default class MyCustomButton extends Component {
    constructor(){
        super();
        this.state ={
            search_string: ''
        }
    }
   

    render(){


        return (
            <div>
              <Button
                onClick={() => {alert('THAT TICKLED');}}
                variant="contained" 
                color= "info"
                size= "large"
                
                >
                Gimme a click!
                </Button>
              
            </div>
          );
    }
}