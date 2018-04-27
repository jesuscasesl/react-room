import React from 'react'
import PropTypes from 'prop-types'

import Details from './../../Components/Details/Details'

const DetailsPage = props => {
  const { state } = props.location
  return (
    <Details
      roomDetails = { state }/>
  )
}

DetailsPage.porpTypes = {
  location: PropTypes.object
}

export default DetailsPage
