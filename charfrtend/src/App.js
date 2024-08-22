import axios from 'axios';
import React from 'react';

class App extends React.Component {

  state = { details: [], }

  componentDidMount() {

    let data;
    axios.get('http://localhost:8000')
      .then(res => {
       data = res.data;
       this.setState({
        details: data
       });
      })
      .catch(err => { })
  }

  render() {
    return (
      <div>
        <header> Data generated from django </header>
        {this.state.details.map((output, id) => (
          <div key = {id}>
          <div>
            <h2>{output.character}</h2>
            <h2>{output.power}</h2>
          </div>
          </div>
        ))}
      </div>
    )
  }

}

export default App;
