import React from 'react';

const EditCharacter = () => {
    return (
        
              <form>
            
            <div className="genform">
            <h2>Edit a Character</h2>
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

export default EditCharacter;