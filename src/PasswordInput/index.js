import React, { Component, PropTypes } from 'react'
import zxcvbn from 'zxcvbn'

import PasswordStrengthIndicator from '../PasswordStrengthIndicator'
import style from './style.sass'

const COLORS = {
  BAD: '#e74c3c',
  GOOD: '#27ae60',
  OK: '#f1c40f'
}

class PasswordInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.password != nextProps.password) {
      this.setState({
        score: zxcvbn(nextProps.password).score
      })
    }
  }

  renderProgressColor () {
    if (this.state.score == 4) {
      return COLORS.GOOD
    } else if (this.state.score >= 2) {
      return COLORS.OK
    } else {
      return COLORS.BAD
    }
  }

  render () {
    return (
      <div className='emoji-password-form-group' style={style}>
        <div className='emoji-password-input-container'>
          <table>
            <tbody>
              <tr>
                <td className="input-column">
                  <label className="emoji-password-input-label">{ this.props.title || 'Password' }</label>
                  <input className='emoji-password-input'
                    type={ this.props.secureTextEntry ? 'password' : 'text' } 
                    value={this.props.password || ''}
                    onChange={(e) => this.props.onChangeText(e.target.value) }
                    placeholder={ this.props.placeholder || 'Type your password...' } /> 
                </td>
                <td className="password-indicator-column" width="60">
                  <PasswordStrengthIndicator 
                    score={this.state.score} />
                </td>
              </tr>
            </tbody>
          </table>
          <div 
            className="password-progress"
            style={{ width: `${(this.state.score) / 4 * 100}%`, borderColor: this.renderProgressColor() }}>
          </div>
        </div>
      </div>
    )
  }
}

PasswordInput.defaultProps = {
  secureTextEntry: true
}

PasswordInput.propTypes = {
  password: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  secureTextEntry: PropTypes.bool
}

export default PasswordInput
