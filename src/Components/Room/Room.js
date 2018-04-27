import React from 'react'
import PropTypes from 'prop-types'

import './Room.css'

import imgDefault from './../../Assets/img/roomDefault.jpg'
import BtnRoomsDetails from './../BtnRoomsDetails/BtnRoomsDetails'

const _printBtn = (props) =>{
  if (props.isDetails === undefined) {
    return (
      <BtnRoomsDetails
        btnprops = { props }/>
    )
  }
}

const Room = props => {
  const {
    city,
    photoUrl,
    price,
    symbol,
    title } = props

  return (
    <article className = 'containerRoom'>
      <div className = 'containerImg'>
        <img
          className = 'imgRoom'
          src = { photoUrl || imgDefault }
          alt = { title } />
      </div>

      <div className = 'containerInfo'>
        <h1 className = 'infoTitle'>{ city }</h1>
        <p className = 'infoDes'>{ title }</p>
        <span className = 'infoPrice'>{ price }{ symbol }</span>
        { _printBtn(props) }
      </div>
    </article>
  )
}

Room.propTypes = {
  city: PropTypes.string,
  idPresentRoom: PropTypes.number,
  idRoom: PropTypes.number,
  photoUrl: PropTypes.string,
  price: PropTypes.number,
  symbol: PropTypes.string,
  title: PropTypes.string,
}

export default Room
