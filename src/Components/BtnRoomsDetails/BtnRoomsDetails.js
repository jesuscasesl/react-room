import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './BtnRoomsDetails.css'

import Button from './../Button/Button'

const BtnRoomsDetails = props => {
  const {
    city,
    idPresentRoom,
    idRoom,
    photoUrl,
    price,
    roomType,
    symbol,
    title } = props.btnDetailsProps

  return (
    <div className = 'containerBtnRoomsDetails'>
      <Link
        to = { `/id/${idRoom}` } >
        <Button
          btnStyle = 'btn btnGreen'
          btnText = 'Other Rooms' />
      </Link>

      <Link
        to = {{
            pathname: `/details/${idRoom}`,
            state: {
              city,
              isDetails: true,
              idPresentRoom,
              idRoom: `${idRoom}`,
              photoUrl,
              price,
              roomType,
              symbol,
              title,
            }
          }} >
          <Button
            btnStyle = 'btn btnOrange'
            btnText = 'More details' />
        </Link>
    </div>
  )
}

BtnRoomsDetails.propTypes = {
  btnDetailsProps: PropTypes.shape({
    city: PropTypes.string,
    idPresentRoom: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    idRoom: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    photoUrl: PropTypes.string,
    price: PropTypes.number,
    roomType: PropTypes.number,
    symbol: PropTypes.string,
    title: PropTypes.string,
  })
}

BtnRoomsDetails.defaultProps = {
  btnDetailsProps: {
    idPresentRoom: 122836,
    idRoom: 122836,
  }
}

export default BtnRoomsDetails
