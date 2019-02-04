import React from 'react'
import axios from 'axios'


// import Form from './Form'

class ChocolatesIndex extends React.Component {
  constructor(){
    super()
    this.state = {
      chocolate: []
    }
  }


  componentDidMount(){
    axios.get('/api/chocolates')
      .then(res => this.setState({chocolate: res.data}))
  }


  render(){
    console.log('on index')
    return(
      <section className= "section">
        <div className= "container">

          <div className= "columns is-multiline">

            {this.state.chocolate.map(chocolate =>
              <div className="column is-one-quarter" key={chocolate._id}>
                {chocolate.name}
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default ChocolatesIndex
