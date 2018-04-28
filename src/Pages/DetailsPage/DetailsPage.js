import React from 'react'
import PropTypes from 'prop-types'

import Details from './../../Components/Details/Details'

const DetailsPage = props => {
  const { state } = props.location
  return (
    <Details
      roomDetails = { state } />
  )
}

DetailsPage.porpTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      city: PropTypes.string,
      idPresentRoom: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired,
      idRoom: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired,
      isDetails: PropTypes.bool,
      photoUrl: PropTypes.string,
      price: PropTypes.number,
      roomType: PropTypes.number,
      symbol: PropTypes.string,
      title: PropTypes.string
    })
  })
}

DetailsPage.defaultProps = {
  location: {
    state: {
      idPresentRoom: 122836,
      idRoom: 122836
    }
  }
}

export default DetailsPage
