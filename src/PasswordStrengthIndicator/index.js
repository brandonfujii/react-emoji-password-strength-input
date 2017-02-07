import React, { Component, PropTypes } from 'react'
import EmojiIndicator from '../EmojiIndicator'

class PasswordStrengthIndicator extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     score: 0
  //   }
  // }

  // componentWillReceiveProps (nextProps) {
  //   if (this.props.password != nextProps.password) {
  //     this.setState({
  //       score: zxcvbn(nextProps.password).score
  //     })
  //   }
  // }

  render () {
    return (
      <div className="password-strength-indicator">
        <EmojiIndicator score={this.props.score} />
      </div>
    ) 
  }
}

PasswordStrengthIndicator.propTypes = {
  score: PropTypes.number.isRequired
}

export default PasswordStrengthIndicator