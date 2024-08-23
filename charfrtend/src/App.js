import axios from 'axios';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";


class App extends React.Component {

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


render() {
  return (
    <BrowserRouter>
      
        
          
            
           
            <Header />
             <CharacterCard />
              
           
            
         
       

       
        <Routes>
          <Route exact path="/" component={Home}/>
          <Route exact path="/characters" component={CharacterCard}/>
          
          
          
         
        </Routes>

       

     
    </BrowserRouter>
  );
}


}

export default App;
