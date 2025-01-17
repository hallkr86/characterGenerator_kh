import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const CreateCharacter = () => {

  const [character, setCharacter] = useState("");
  const [power, setPower] = useState("");

  const navigate = useNavigate();

  const notify = () => toast("You created a new Character!");

  const newCharacter = {
    character: character,
    power: power
  }


  const addCharacter = (data) => {
    axios.post("http://127.0.0.1:8000/reacts/", data)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err.message)
    })
  }

  const handleSumbit = (e) => {
    e.preventDefault()
    if (!character && !power) {
      return;
    }
      addCharacter(newCharacter)
      notify();
      console.log(newCharacter);

      setTimeout(() => {

        navigate("/CharacterCardcontainer");

      }, 2000);
      
      
  }
  
    return (

        <div className="center-container">

        <form onSubmit = {handleSumbit} className="genform">
            
            
            <h2>Create a new Character</h2>
        <label>
          Character:
          <input type="text" name="character"
          value={character}
          onChange={(e) => setCharacter(e.target.value)} />
        </label>
        <label>
          Power:
          <input type="text" name="power" 
          value={power} 
          onChange={(e) => setPower(e.target.value)} />
        </label>

        
 <button className= "appbutton btn btn-primary" type="submit">
                    Create Character
 </button>
 <ToastContainer />

        {/* <input type="submit" value="Submit" onClick={notify} /> */}
        
        

        
      </form>
      </div>
    );
};

export default CreateCharacter;