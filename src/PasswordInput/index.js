import React, { Component, PropTypes } from 'react'
import zxcvbn from 'zxcvbn'

import PasswordStrengthIndicator from '../PasswordStrengthIndicator'
import style from './style.sass'

const COLORS = { BAD: '#e74c3c', GOOD: '#27ae60', OK: '#f1c40f' }

const defaultProps = {
  secureTextEntry: true
}

const propTypes = {
  password: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  maxLen: PropTypes.number,
  onChangeText: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func
}

class PasswordInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0
    }
    this.renderProgressColor = this.renderProgressColor.bind(this)
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
    const {
      secureTextEntry,
      maxLen,
      password,
      title,
      placeholder,
      onChangeText,
      onChangeScore,
      onBlur,
      onFocus,
      onKeyDown,
      onKeyUp
    } = this.props

    return (
      <div className='emoji-password-form-group' style={style}>
        <div className='emoji-password-input-container'>
          <table>
            <tbody>
              <tr>
                <td className="input-column">

                  <label className="emoji-password-input-label">{ title ? title.substring(0, 25) : 'Password' }</label>
                  <input className='emoji-password-input'
                    type={ secureTextEntry ? 'password' : 'text' } 
                    value={ password || ''}
                    maxLength={maxLen || 50}
                    placeholder={ placeholder || 'Type your password...' }
                    onChange={(e) => onChangeText(e.target.value)}
                    onBlur={onBlur ? onBlur : null}
                    onFocus={onFocus ? onFocus : null} 
                    onKeyDown={onKeyDown ? onKeyDown : null}
                    onKeyUp={onKeyUp ? onKeyUp : null} /> 
                </td>
                <td className="password-indicator-column no-user-select" width="60">
                  <PasswordStrengthIndicator 
                    score={this.state.score}
                    onChangeScore={onChangeScore} />
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

PasswordInput.propTypes = propTypes
PasswordInput.defaultProps = defaultProps

export default PasswordInput
