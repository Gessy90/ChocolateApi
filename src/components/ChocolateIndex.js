import React from 'react'
import axios from 'axios'


class ChocolateIndex extends React.Component {
  componentDidMount() {
    axios.get('/api/chocolates')
      .then(response => this.setState( { chocolate: response.data }))
      .catch( error => console.log(error))
  }

  render(){
    return (
      <div>
        <h1>{this.state.chocolate.data.name}</h1>
        <p>Description: <strong>{this.state.chocolate.data.description}</strong></p>
        <p>Ingredients:{this.state.chocolate.data.ingredients}</p>
        <p>Price: <strong>{this.state.chocolate.data.price}</strong></p>
      </div>
    )
  }


}
export default ChocolateIndex
