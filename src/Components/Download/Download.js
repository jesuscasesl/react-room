import React from 'react'
import PropTypes from 'prop-types'

import './Download.css'

const dataDefault = 'data:text/json;charset=utf-8,'

const Download = props => {

  const { roomJson } = props
  return (
    <a
      className = 'btn green'
      href = { `${dataDefault}${encodeURIComponent(JSON.stringify(roomJson, null, "\t"))}` }
      download = 'downloadJSON.json'>Download JSON</a>
  )
}

Download.propTypes = {
  roomJson: PropTypes.arrayOf(PropTypes.shape({
    adId: PropTypes.number,
    city: PropTypes.string,
    currencySymbol: PropTypes.string,
    id: PropTypes.number,
    mainPhotoUrl: PropTypes.string,
    pricePerMonth: PropTypes.number,
    title: PropTypes.string
  }))
}

export default Download
