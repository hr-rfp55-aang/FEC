import React from 'react'
import Details from './Details/Details.jsx'
import Questions from './Questions/Questions.jsx'
import Reviews from './Reviews/Reviews.jsx'
import Related from './Related/Related.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }


  render() {
    return(
      <div>
        <Details />
        <Related />
        <Questions />
        <Reviews />
      </div>
    )
  }
}




export default App
