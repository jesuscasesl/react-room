import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Main.css'

import Filter from './../Filter/Filter'
import ListRoom from './../ListRoom/ListRoom'
import { orderByPrice, filterBy } from './../../helper/helper'
import { fetchRoom } from './../../api/api'

const url = 'https://www.spotahome.com/api/public/listings/similars/'

class Main extends Component {
  static propTypes = {
    idRoom: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired
  }

  static defaultProps = {
    idRoom: 122836
  }

  state = {
    allRooms: [],
    err: false,
    filter: '0',
    isNewProp: false,
    order: 'asc',
    presentRooms: [],
  }


  componentDidMount = () => {
    this._getRoom(this.props.idRoom)
  }

  static getDerivedStateFromProps = propIdRoom => {
    return { isNewProp: true, newIdRoom: propIdRoom.idRoom }
  }

  componentDidUpdate = () => {
    if(this.state.isNewProp){
      this._getRoom( this.state.newIdRoom )
    }
  }

  _getRoom = idRoom  => {
    fetchRoom( url, idRoom )
      .then( resRooms => {
        const { homecards } = resRooms.data
        const allRooms = homecards.map( room => {
          const {
            adId,
            city,
            currencySymbol,
            id,
            mainPhotoUrl,
            pricePerMonth,
            roomType,
            title } = room

          return {
            adId,
            city,
            currencySymbol,
            id,
            mainPhotoUrl,
            pricePerMonth,
            roomType: roomType[0],
            title }
        })
        const filterRooms = filterBy( allRooms, this.state.filter )
        return ({
          allRooms,
          filterRooms
        })
      })
      .then( rooms => {
        const { allRooms, filterRooms } = rooms
        const orderedRooms = orderByPrice( filterRooms, this.state.order )
        return({
          allRooms,
          orderedRooms
        })
      })
      .then( rooms => {
        const { allRooms, orderedRooms } = rooms
        this.setState({
          allRooms,
          presentRooms: orderedRooms,
          isNewProp: false

        })
      })
      .catch( err => {
        this.setState( { err: true } )
        throw new Error( 'Error by fecth' )
      })
  }

  _handleFilterType = propsFilter => {
    const newRoomsfilter = filterBy( this.state.allRooms, propsFilter )
    const newRoomsOrder = orderByPrice( newRoomsfilter, this.state.order )
    this.setState( { presentRooms: newRoomsOrder, filter: propsFilter } )
  }

  _handleOrdertype = propsOrder => {
    const orderedRoom = orderByPrice( this.state.presentRooms, propsOrder )
    this.setState( { presentRooms: orderedRoom, order: propsOrder } )
  }

  _renderListRoom = () => {
    if ( this.state.err ) {
      return (
        <div className = 'containerError'>
          <h2 className = 'errorTitle'>'Error by fecth'</h2>
        </div>
      )
    }
    return (
      <ListRoom
        idPresentRoom = { this.props.idRoom }
        rooms = { this.state.presentRooms } />
    )
  }

  render () {
    return (
      <div className="containerMain">
        <Filter
          filterType = { this._handleFilterType }
          orderPrice = { this._handleOrdertype }
          rooms = { this.state.presentRooms }/>
        { this._renderListRoom() }
      </div>
    )
  }
}

export default Main
