import React from 'react';
import Details from './Components/Details/Details.jsx';
import Questions from './Components/Questions/Questions.jsx';
import Reviews from './Components/Reviews/Reviews.jsx';
import Related from './Components/Related/Related.jsx';
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

  formatDate (date) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var now = new Date(date);
    return months[now.getMonth()] + ' ' + ( now.getDate() + 1 ) + ', ' + now.getFullYear();
  }

  render() {
    return (
      <div>
        <Details />
        <Related />
        <Questions />
        <Reviews formatDate={this.formatDate}/>
      </div>
    );
  }
}

export default App;
