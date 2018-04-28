import React from 'react'
import PropTypes from 'prop-types'

import './Download.css'

const dataDefault = 'data:text/json;charset=utf-8,'

const Download = props => {
  const { jsonRooms } = props

  return (
    <a
      className = 'btn green'
      href = { `${dataDefault}${encodeURIComponent(JSON.stringify(jsonRooms, null, "\t"))}` }
      download = 'downloadJSON.json' >Download JSON</a>
  )
}

Download.propTypes = {
  jsonRooms: PropTypes.arrayOf(PropTypes.shape({
    adId: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    city: PropTypes.string,
    currencySymbol: PropTypes.string,
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    mainPhotoUrl: PropTypes.string,
    pricePerMonth: PropTypes.number,
    roomType: PropTypes.number,
    title: PropTypes.string,
  }))
}

export default Download
