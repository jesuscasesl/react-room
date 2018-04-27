import React from 'react'
import { Link } from 'react-router-dom';
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
    symbol,
    title } = props.btnprops

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
  btnprops: PropTypes.object
}

export default BtnRoomsDetails
