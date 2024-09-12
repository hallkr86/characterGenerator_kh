import axios from 'axios';
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import Home from "./components/Home/Home";
import CharacterCard from "./components/CharacterCardcontainer/CharacterCardcontainer";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
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
          <Route path="/CreateCharacter" element={<CreateCharacter/>} />
          <Route path="/character/:slug" element={<CharacterDetails/>} />
          <Route path="/EditCharacter" element={<EditCharacter/>} />
          
         
        </Routes>
        
        
           {/* <HomePage /> */}
          
            
            
            {/* <Controller /> */}
              
          

       
</div>
     
    </BrowserRouter>
  );
}


}


//   state = { details: [], }

//   componentDidMount() {

//     let data;
//     axios.get('http://localhost:8000')
//       .then(res => {
//        data = res.data;
//        this.setState({
//         details: data
//        });
//       })
//       .catch(err => { })
//   }



  
//   render() {
//     return (
//       <>
// <Header />


//       <div>
//         <header> Data generated from django </header>
//         {this.state.details.map((output, id) => (
//           <div key = {id}>
//           <div>
//             <h2>{output.character}</h2>
//             <h2>{output.power}</h2>
//           </div>
//           </div>
//         ))}
//       </div>
//       </>
//     );
//   }

export default App;
