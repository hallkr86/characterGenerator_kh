import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditCharacter = () => {

  const [character, setCharacter] = useState("");
  const [power, setPower] = useState("");

  // const notify = () => {
  //   console.log("Toastify is triggered");
  //   toast("You updated a Character!");
  // }
  const {slug} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/reacts/${slug}`)
    .then(res => {
      console.log(res.data)
      setCharacter(res.data.character)
      setPower(res.data.power)
    })
    .catch(err => {
      console.log(err.message)
    });
      
  }, [slug]);

  const updatedCharactertemp = {
    character: character,
    power: power
  };

  const updateCharacter = (data, slug) => {
    
    axios.put(`http://127.0.0.1:8000/reacts/${slug}/`, data)
    .then(res => {
      console.log(res.data)
      toast("Character updated successfully");
      
    })
    .catch(err => {
      console.log(err.message);
      toast.error("Failed to update the character");
     
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault()


    if (!character && !power) return;
    
    updateCharacter(updatedCharactertemp, slug);

    setTimeout(() => {

      navigate(`/character/${slug}`);
    }, 2000);
    
    
    
  };

    return (
      <>  
              <div className="center-container">
              <form onSubmit={handleSubmit} className="genform">
            
            
            <h2>Edit a Character</h2>
        <label>
          Character:
          <input type="text" name="character" value={character} onChange={(e) => setCharacter(e.target.value)}/>
        </label>
        <label>
          Power:
          <input type="text" name="power" value={power} onChange={(e) => setPower(e.target.value)} />
        </label>
        <button className="appbutton btn btn-primary" type="submit"> Update Character
          </button>
          
        
      </form>
      </div>

        <ToastContainer />
    </>
    );
};



export default EditCharacter;