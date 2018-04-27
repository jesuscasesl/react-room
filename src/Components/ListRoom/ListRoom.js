import React from 'react'
import PropTypes from 'prop-types'

import './ListRoom.css'

import Room from './../Room/Room'

const ListRoom = props => {

  const { rooms, idPresentRoom } = props

  return (
    <section className = 'containerListRoom'>
      {
        rooms.map( room => {
          const {
            id,
            adId,
            city,
            mainPhotoUrl,
            pricePerMonth,
            currencySymbol,
            title } = room

          return (
            <Room
              key = { id }
              city = { city }
              idPresentRoom = { idPresentRoom }
              idRoom = { adId }
              photoUrl = { mainPhotoUrl }
              price = { pricePerMonth }
              symbol = { currencySymbol }
              title = { title } />
          )
        })
      }
    </section>
  )
}

ListRoom.propsTypes = {
  idPresentRoom: PropTypes.number,
  rooms: PropTypes.array
}

export default ListRoom
