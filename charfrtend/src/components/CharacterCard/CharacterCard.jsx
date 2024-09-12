
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import CharacterDetails from "../../Pages/CharacterDetails";
import { Link } from "react-router-dom";

function CharacterCard({ character, power, slug}) {

 
//   const [data, setData] = useState([]);

//   useEffect(() => {
//       fetch(`http://127.0.0.1:8000/reacts/${slug}`)
//           .then(response => response.json())
//           .then(data => setData(data))
//           .catch(error => console.error('Error fetching data:', error));
//   }, [slug]);



  return (
    
    //   <div className="container">
    //     <div className="row">
    //     {data.map((output, id) => (
    //         <div className="col-md-4" key= {id}>
            <Card border="primary" style={{ width: '18rem' }}>
            <Card.Body>
                <Link to={`/character/${slug}`} style={{textDecoration: "none", color:"black"}}>
           <Card.Title>{character}</Card.Title>
           </Link> 
                <Card.Text> Power: {power}</Card.Text>     
              
              <Button href={`/EditCharacter/${slug}`}>Edit</Button>
              <Button href={`/DeleteCharacter/${slug}`}>Delete</Button>
          </Card.Body>
          </Card>
        //   </div>
    );}
    // </div>
    //   </div>
      

 
//         );
        
//   };
          {/* <Card border="primary" style={{ width: '18rem' }}>
          <Link to="CharacterDetails"style={{textDecoration: "none", color:"black"}}>
           <h1>Characters Created</h1> 
           </Link>
          <Card.Body>
              {data.map((output, id) => (
                  <div key= {id}>
                  <h5>{output.character}</h5>
                  <h5>{output.power}</h5>

                  </div>
              ))}
              <Button href="EditCharacter">Edit</Button>
              <Button href="EditCharacter">Edit</Button>
          </Card.Body>
          </Card>

          <Card border="primary" style={{ width: '18rem' }}>
          <Link to="CharacterDetails" style={{textDecoration: "none", color:"black"}}>
           <h1>Characters Created</h1> 
           </Link>
          <Card.Body>
              {data.map((output, id) => (
                  <div key= {id}>
                  <h5>{output.character}</h5>
                  <h5>{output.power}</h5>

                  </div>
              ))}
              <Button href="EditCharacter">Edit</Button>
              <Button href="EditCharacter">Edit</Button>
          </Card.Body>
          </Card>

          <Card border="primary" style={{ width: '18rem' }}>
          <Link to="CharacterDetails" style={{textDecoration: "none", color:"black"}}>
           <h1>Characters Created</h1> 
           </Link>
          <Card.Body>
              {data.map((output, id) => (
                  <div key= {id}>
                  <h5>{output.character}</h5>
                  <h5>{output.power}</h5>

                  </div>
              ))}
              <Button href="EditCharacter">Edit</Button>
              <Button href="EditCharacter">Edit</Button>
          </Card.Body>
          </Card>

          <Card border="primary" style={{ width: '18rem' }}>
          <Link to="CharacterDetails" style={{textDecoration: "none", color:"black"}}>
           <h1>Characters Created</h1> 
           </Link>
          <Card.Body>
              {data.map((output, id) => (
                  <div key= {id}>
                  <h5>{output.character}</h5>
                  <h5>{output.power}</h5>

                  </div>
              ))}
              <Button href="EditCharacter">Edit</Button>
              <Button href="EditCharacter">Edit</Button>
          </Card.Body>
          </Card>

          <Card border="primary" style={{ width: '18rem' }}>
          <Link to="CharacterDetails" style={{textDecoration: "none", color:"black"}}>
           <h1>Characters Created</h1> 
           </Link>
          <Card.Body>
              {data.map((output, id) => (
                  <div key= {id}>
                  <h5>{output.character}</h5>
                  <h5>{output.power}</h5>

                  </div>
              ))}
              <Button href="EditCharacter">Edit</Button>
              <Button href="EditCharacter">Edit</Button>
          </Card.Body>
          </Card>

       */}
  
   
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