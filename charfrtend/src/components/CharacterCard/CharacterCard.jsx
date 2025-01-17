
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import CharacterDetails from "../../Pages/CharacterDetails";
import { Link } from "react-router-dom";

function CharacterCard({ character, power, slug}) {

 




  return (
    
   
            <Card border="primary" style={{ width: '18rem' }}>
            <Card.Body>
              <h4 className="char-title">Character</h4>
                <Link to={`/character/${slug}`} style={{textDecoration: "none", color:"black"}}>
           <Card.Title>{character}</Card.Title>
           </Link> 
                <Card.Text> Power: {power}</Card.Text>     
              
                
                {/* <Link to={`/edit-character/${slug}`}>
              <Button>Edit</Button>
              </Link>

              <Link to={`/DeleteCharacter/${slug}`}>
              <Button>Delete</Button>
              </Link> */}
          </Card.Body>
          </Card>
        
    );}
   
        

       
      
    
  



  
export default CharacterCard;