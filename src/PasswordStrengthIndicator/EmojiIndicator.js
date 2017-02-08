import React from 'react'
import emojis from '../_emojis'

const EmojiIndicator = ({ score }) => {
  return (
    <div className="emoji-password-score">
      <img className="emoji-score" src={`dist/${renderEmoji(score)}`} />
    </div>
  )
}

const renderEmoji = (score) => {
  switch (score) {
    case 0:
      return emojis.sad
    case 1:
      return emojis.ok
    case 2:
      return emojis.cool
    case 3:
      return emojis.happy
    case 4:
      return emojis.angel
    default:
      return emojis.sad
      break
  }
}


export default EmojiIndicator