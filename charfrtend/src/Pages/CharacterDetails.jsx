
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import EditCharacter from '../Pages/EditCharacter';
import Modal from '../components/Modal/Modal';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CharacterDetails = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState(null);
  const baseURL = "http://127.0.0.1:8000";

  const {slug} = useParams();
  const navigate = useNavigate();

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
      fetch(`${baseURL}/reacts/${slug}/`)
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


  const deleteCharacter = (slug) => {
    axios.delete(`${baseURL}/reacts/${slug}/`)
    .then(() => {
      toast("Character deleted!");

      setTimeout(() => {
        navigate('/CharacterCardcontainer');
      }, 2000);
      
      
    })
    .catch(err => {
      toast.error("Error deleting character. Please try again.");
    console.error('Error deleting character:', err.message);
  })
    .finally(() => {
      // clase the modal
      setIsOpen(false);  
    });
  };

  

    return (
      <>
        <div className="intro container">
        
        {/* {data.map((output, id) => (
            <div key= {id}> */}
            <Card border="primary" style={{ width: '18rem' }}>
            <Card.Body>
                {/* <Link to={`/reacts/${output.slug}`} style={{textDecoration: "none", color:"black"}}> */}
           <Card.Title>{data.character}</Card.Title>
           {/* </Link> */}
          
              
                <Card.Text> Power: {data.power}</Card.Text>  
                 

                  
              
              <Link to={`/edit-character/${slug}`}>
              <Button className="me-2">Edit</Button>
              </Link>
              

              {/* <Link to={`/DeleteCharacter/${slug}`}> */}
              <Button
              className="me-2"
              onClick={handleIsOpen}>  Delete</Button>

              
              {/* </Link> */}
          </Card.Body>
          </Card>

         
          
         
{/* ))}
      
        </div> */}
        </div>
       

       {/* this makes the modal disappear because it was set to false up top line 11 and for delete confumation*/}
       {isOpen && < Modal slug={slug} onConfirm={deleteCharacter} onCancel={handleIsOpen} />} 

       <ToastContainer />

       </>

    );
};

export default CharacterDetails;