import React from 'react'
import PropTypes from 'prop-types'

import './Button.css'

const Button = props => {

  const { btnStyle, btnText } = props

  return (
    <button className = { btnStyle }>{ btnText }</button>
  )
}

Button.propTypes = {
  btnStyle: PropTypes.string,
  btnText: PropTypes.string
}

export default Button
