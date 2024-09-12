
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import EditCharacter from '../Pages/EditCharacter';

const CharacterDetails = () => {

  const [data, setData] = useState(null);
  const baseURL = "http://127.0.0.1:8000";

  const {slug} = useParams();

  useEffect(() => {
      fetch(`${baseURL}/reacts/${slug}`)
          .then(response =>{
            console.log('Response:', response);
            return response.json();
  })

          .then(data => {
            console.log('fetched data:', data);
            setData(data);
  })
          .catch((error) => {
            console.error('Error fetching data:', error);
  });
  }, [slug]); 
  
  if (!data) {
    return <div>Loading...</div>;
  }
    return (
        <div className="container">
        <div className="row col-md-9">
        {/* {data.map((output, id) => (
            <div key= {id}> */}
            <Card border="primary" style={{ width: '18rem' }}>
            <Card.Body>
                {/* <Link to={`/reacts/${output.slug}`} style={{textDecoration: "none", color:"black"}}> */}
           <Card.Title>{data.character}</Card.Title>
           {/* </Link> */}
          
              
                <Card.Text> Power: {data.power}</Card.Text>  
                 

                  
              
              <Button href={`/EditCharacter/${slug}`}>Edit</Button>
              <Button href={`/DeleteCharacter/${slug}`}>Delete</Button>
          </Card.Body>
          </Card>

          
          </div>
{/* ))}
      
        </div> */}
        </div>
       
    );
};

export default CharacterDetails;