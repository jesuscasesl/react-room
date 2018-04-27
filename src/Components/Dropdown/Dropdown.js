import React from 'react'
import PropTypes from 'prop-types'

import './Dropdown.css'

const Dropdown = props => {
  const {
    children,
    labelDropdown,
    onChangeProperty,
    typeDropdown
  } = props

  const _handleChangeProperty = e => {
    e.preventDefault()
    if( e.target.value !== 'default' ){
      onChangeProperty( e.target.value )
    }
  }

  return (
    <div className = 'containerDropdown'>
      <label
        htmlFor = { typeDropdown }
        className = 'dropdownLabel'>{ labelDropdown }</label>
      <select
        id = { typeDropdown }
        className = 'dropdownSelect'
        name = { typeDropdown }
        onChange = { _handleChangeProperty } >
        { React.Children.toArray( children ).map( option => option ) }
      </select>
    </div>
  )
}

Dropdown.propTypes = {
  children: PropTypes.node,
  labelDropdown: PropTypes.string,
  onChangeProperty: PropTypes.func,
  typeDropdown: PropTypes.string
}

export default Dropdown
