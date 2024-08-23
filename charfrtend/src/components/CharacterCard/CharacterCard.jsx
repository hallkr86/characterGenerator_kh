

import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
// import axios from 'axios';

function CharacterCard() {

 
  const [data, setData] = useState([]);

  useEffect(() => {
      fetch('http://localhost:8000')
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
      <div>
          <h1>Data from Django</h1>
          <ul>
              {data.map(item => (
                  <li key={item.character}>{item.power}</li>
              ))}
          </ul>
      </div>
  );
};
   
  //   state = { details: [], }

  // componentDidMount() {

  //   let data;
  //   axios.get('http://localhost:8000')
  //     .then(res => {
  //      data = res.data;
  //      this.setState({
  //       details: data
  //      });
  //     })
  //     .catch(err => { })
  // }

  //   render() {
  //     return (
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
  //     )
  //   }



  
  export default CharacterCard;