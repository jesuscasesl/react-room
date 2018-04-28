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
      roomType,
      symbol,
      title } = props.roomDetails

    return (
      <div className = 'containerDetails'>
        <Room
          city = { city }
          idPresentRoom = { idPresentRoom }
          idRoom = { idRoom }
          isDetails = { isDetails }
          photoUrl = { photoUrl }
          price = { price }
          roomType = { roomType }
          symbol = { symbol }
          title = { title }
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
  roomDetails: PropTypes.shape({
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
}

Details.defaultProps = {
  roomDetails: {
    idPresentRoom: 122836,
    idRoom: 122836
  }
}

export default Details
