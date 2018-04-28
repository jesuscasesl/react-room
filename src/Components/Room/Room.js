import React from 'react'
import PropTypes from 'prop-types'

import './Room.css'

import imgDefault from './assets/roomDefault.jpg'
import BtnRoomsDetails from './../BtnRoomsDetails/BtnRoomsDetails'

const _renderBtn = props =>{
  if ( props.isDetails === undefined ) {
    return (
      <BtnRoomsDetails
        btnDetailsProps = { props } />
    )
  }
}

const Room = props => {
  const {
    city,
    photoUrl,
    price,
    roomType,
    symbol,
    title } = props

  const type = roomType === 6000 ? 'Apartment' : 'rooms'

  return (
    <article className = 'containerRoom'>
      <div className = 'containerImg'>
        <img
          className = 'imgRoom'
          src = { photoUrl || imgDefault }
          alt = { title } />
      </div>

      <div className = 'containerInfo'>
        <h1 className = 'infoTitle'>{ city } - { type }</h1>
        <p className = 'infoDes'>{ title }</p>
        <span className = 'infoPrice'>{ price }{ symbol }</span>
        { _renderBtn(props) }
      </div>
    </article>
  )
}

Room.propTypes = {
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
}

Room.defaultProps = {
  idPresentRoom: 122836,
  idRoom: 122836
}

export default Room
