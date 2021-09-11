import React from 'react';
import Details from './Details/Details.jsx';
import Questions from './Questions/Questions.jsx';
import Reviews from './Reviews/Reviews.jsx';
import Related from './Related/Related.jsx';
import axios from 'axios';

let server = 'http://localhost:3001';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    this.update = this.update.bind(this);
  }

  update() {
    axios.get(server + '/products')
      .then( (result) => {
        console.log('axios success', result);
      })
      .catch( (err) => {
        console.log('axios err', err);
      });
  }

  componentDidMount() {
    console.log('mounted');
    this.update();
  }

  render() {
    return (
      <div>
        <Details />
        <Related />
        <Questions />
        <Reviews />
      </div>
    );
  }
}

export default App;
