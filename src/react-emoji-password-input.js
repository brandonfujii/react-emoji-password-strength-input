import React, { Component } from 'react'
import { render } from 'react-dom'
import PasswordInput from './PasswordInput'


class SampleForm extends Component {
  constructor () {
    super()
    this.state = {
      password: ''
    }
  }

  handleChangeText (text) {
    this.setState({
      password: text
    })
  }

  render () {
    return (
      <PasswordInput 
        onChangeText={this.handleChangeText.bind(this)}
        password={this.state.password}
        placeholder="Type a secure password..." 
        onChangeScore={({ prevScore, nextScore }) => { console.log(prevScore, nextScore) } }/>
    )
  }
}

render (
  <SampleForm />,
  document.getElementById('app')
)