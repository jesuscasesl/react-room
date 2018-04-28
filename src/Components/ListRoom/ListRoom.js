import React from 'react'
import PropTypes from 'prop-types'

import './ListRoom.css'

import Room from './../Room/Room'

const ListRoom = props => {
  const { idPresentRoom, rooms } = props

  return (
    <section className = 'containerListRoom'>
      {
        rooms.map( room => {
          const {
            adId,
            city,
            currencySymbol,
            id,
            mainPhotoUrl,
            pricePerMonth,
            roomType,
            title } = room

          return (
            <Room
              key = { id }
              city = { city }
              idPresentRoom = { idPresentRoom }
              idRoom = { adId }
              photoUrl = { mainPhotoUrl }
              price = { pricePerMonth }
              roomType = { roomType }
              symbol = { currencySymbol }
              title = { title } />
          )
        })
      }
    </section>
  )
}

ListRoom.propsTypes = {
  idPresentRoom: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  rooms: PropTypes.arrayOf(PropTypes.shape({
    adId: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    city: PropTypes.string,
    currencySymbol: PropTypes.string,
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    mainPhotoUrl: PropTypes.string,
    pricePerMonth: PropTypes.number,
    roomType: PropTypes.number,
    title: PropTypes.string
  }))
}

ListRoom.defaultProps = {
  idPresentRoom: 122836,
  rooms: {
    adId: 122836,
    id: 122836
  }
}

export default ListRoom
