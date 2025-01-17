import axios from 'axios';
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import Home from "./components/Home/Home";
import CharacterCardcontainer from "./components/CharacterCardcontainer/CharacterCardcontainer";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";

import HomePage from './Pages/HomePage';
import CreateCharacter from './Pages/CreateCharacter';
import CharacterDetails from './Pages/CharacterDetails';
import EditCharacter from "./Pages/EditCharacter";


class App extends Component {




render() {
  return (
    <BrowserRouter>
      
            
           <div className="App">
            
            <Navbar />
            <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/CharacterCardcontainer" element={<CharacterCardcontainer/>} />
          <Route path="/CreateCharacter" element={<CreateCharacter/>} />
          <Route path="/character/:slug" element={<CharacterDetails/>} />
          <Route path="/edit-character/:slug" element={<EditCharacter />} />
          
         
        </Routes>
        
        
           
              
          

       
</div>
     
    </BrowserRouter>
  );
}


}







export default App;
