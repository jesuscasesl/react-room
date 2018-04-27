import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './Details.css'

import Room from './../Room/Room'
import Button from './../Button/Button'

const Details = props => {
    const {
      city,
      idPresentRoom,
      idRoom,
      isDetails,
      photoUrl,
      price,
      symbol,
      title } = props.roomDetails

    return (
      <div className = 'containerDetails'>
        <Room
          city = { city }
          title = { title }
          photoUrl = { photoUrl }
          price = { price }
          symbol = { symbol }
          idRoom = { idRoom }
          isDetails = { isDetails }
        />
        <Link to = { `/id/${idPresentRoom}` }>
          <Button
            btnStyle = 'btn btnOrange'
            btnText= 'Back'/>
        </Link>
      </div>
    )
}

Details.propTypes = {
  roomDetails: PropTypes.object
}

export default Details
