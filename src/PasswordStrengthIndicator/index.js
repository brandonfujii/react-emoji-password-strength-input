import React, { Component, PropTypes } from 'react'
import EmojiIndicator from './EmojiIndicator'

const propTypes = {
  score: PropTypes.number.isRequired
}

class PasswordStrengthIndicator extends Component {
  render () {
    return (
      <div className="password-strength-indicator">
        <EmojiIndicator score={this.props.score} />
      </div>
    ) 
  }
}

PasswordStrengthIndicator.propTypes = propTypes

export default PasswordStrengthIndicator
