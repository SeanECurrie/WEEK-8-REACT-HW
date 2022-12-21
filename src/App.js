import { Component } from 'react';
import './App.css';
import { Typography } from "@mui/material";
import MyCustomTable from './components/MyCustomTable';
import MyCustomButton from './components/MyCustomButton';
import MyCustomIMGTable from './components/MyCustomIMGTable';
import MyCustomGrid from './components/MyCustomGrid';
import { styled } from '@mui/material/styles';




class App extends Component {

constructor(){
  super()
  this.state = {
    
  }
}



  render(){
    
    return (
      <div className="App">
        <Typography variant="h1" >This is my app</Typography>
        <Typography variant="h2">Hope you dig it.</Typography>
        <MyCustomGrid>
        </MyCustomGrid>
        <MyCustomButton/>
        <MyCustomTable/>
        <MyCustomIMGTable/>
        

        
        

      
      
      
      
      </div>   
                                      

    
      
    
      
      
    );
  }
}
        
        



export default App;



