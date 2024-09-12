
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import CharacterCard from "../CharacterCard/CharacterCard";

// import axios from 'axios';

function CharacterCardcontainer() {

    const [data, setData] = useState([]);
    const baseURL = "http://127.0.0.1:8000";

    useEffect(() => {
        fetch(`${baseURL}/reacts/`)
        .then(response => response.json())
        .then(data => {
            console.log('Fetched data:', data);
            setData(data);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className= "container">
        <div className= "row">
            {data.map((output, id) => (
                <div className="col-md-4" key={id}>
            
           <h2>Characters</h2>
           <CharacterCard character={output.character} power={output.power} slug={output.slug} />
           </div>
        ))}
        </div>    
        </div>
    );
    
}
           


export default CharacterCardcontainer;