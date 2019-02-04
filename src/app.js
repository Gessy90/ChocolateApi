import React from 'react'
import ReactDOM from 'react-dom'

import ChocolatesNew from './components/ChocolatesNew'
import ChocolatesIndex from './components/ChocolatesIndex'
import axios from 'axios'

import 'bulma'

import {BrowserRouter, Route, Switch } from 'react-router-dom'


class App extends React.Component {
  constructor(){
    super()
    this.state= {}
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/chocolate', this.state.data)
      .then(res => console.log(res))
  }


  handleChange({ target: {name, value} }){
    this.setState({ [name]: value })
  }

  render() {
    if(!this.state.chocolate) return null
    return (
      <BrowserRouter>
        <main>
          <Switch>
            <Route path="/chocolates/new" component={ChocolatesNew} />
            <Route path="/chocolates" component={ChocolatesIndex} />
          </Switch>
        </main>

      </BrowserRouter>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
