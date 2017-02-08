import React, { Component, PropTypes } from 'react'
import EmojiIndicator from './EmojiIndicator'

const propTypes = {
  score: PropTypes.number.isRequired
}

class PasswordStrengthIndicator extends Component {

  componentWillReceiveProps (nextProps) {
    if (nextProps.score != this.props.score) {
      this.props.onChangeScore({ 
        prevScore: this.props.score, 
        nextScore: nextProps.score 
      })

      if (nextProps.score === 4) this.props.onSuccess()
      if (nextProps.score === 1 || nextProps.score === 0) this.props.onFailure()
    }
  }

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
