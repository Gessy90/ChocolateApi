import React from 'react'

import axios from 'axios'

import Form from './Form'

class ChocolateNew extends React.Component{
  constructor(){
    super()

    this.state = {
      data: {
        name: '',
        ingredients: '',
        price: '',
        description: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange({target: {name, value}}){
    const data = {...this.state.data, [name]: value}
    this.setState({data})
  }

  handleSubmit(e){
    e.preventDefault()

    axios
      .post('/api/chocolates', this.state.data)
      .then(() => this.props.history.push('/api/chocolates'))
      .catch(err => alert(err.message))
  }
  render(){
    return(
      <main className="section">
        <div className="container">
          <Form
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </main>
    )
  }
}
export default ChocolateNew
