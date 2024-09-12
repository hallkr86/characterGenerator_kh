import React from 'react';


const CreateCharacter = () => {
    return (

        <form>
            
            <div className="genform">
            <h2>Create a new Character</h2>
        <label>
          Character:
          <input type="text" name="character" />
        </label>
        <label>
          Power:
          <input type="text" name="power" />
        </label>
        <input type="submit" value="Submit" />
        </div>
      </form>
    );
};

export default CreateCharacter;