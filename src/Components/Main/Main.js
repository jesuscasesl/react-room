import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './Main.css';

import Filter from './../Filter/Filter'
import ListRoom from './../ListRoom/ListRoom'
import { orderByy, filterBy } from './../../Helper/Helper'
import { fetchRoom } from './../../Api/Api'

const url = 'https://www.spotahome.com/api/public/listings/similars/'

class Main extends Component {

  static propTypes = {
    idRoom: PropTypes.number
  }

  state = {
    allRoom: [],
    rooms: [],
    order: 'asc',
    filter: '0',
    err: false
  }

  componentDidMount = () => {
    this._getRoom(this.props.idRoom)
  }

  componentWillReceiveProps = props => {
    this._getRoom( props.idRoom )
  }

  _getRoom = idRoom  => {
    fetchRoom( url, idRoom )
      .then( resRooms => {
        const { homecards } = resRooms.data
        const filterRooms = filterBy( homecards, this.state.filter )
        return ({
          allRoom: homecards,
          filterRooms
        })
      })
      .then( rooms => {
        const orderedRooms = orderByy( rooms.filterRooms, this.state.order )
        return({
          allRoom: rooms.allRoom,
          orderedRooms
        })
      })
      .then( rooms => {
        this.setState({
          rooms: rooms.orderedRooms,
          allRoom: rooms.allRoom
        })
      })
      .catch( err => {
        this.setState( { err: true } )
        throw new Error( 'Error by fecth' )
      })
  }

  _handleFilterType = propsFilter => {
    const newRoomsfilter = filterBy(this.state.allRoom, propsFilter)
    const newRoomsOrder = orderByy(newRoomsfilter, this.state.order)
    this.setState({ rooms: newRoomsOrder, filter: propsFilter })
  }

  _handleOrdertype = propsOrder => {
    const orderedRoom = orderByy(this.state.rooms, propsOrder)
    this.setState({ order: propsOrder, rooms: orderedRoom })
  }

  _printListRoom = () => {
    if ( this.state.err ) {
      return (
        <div className = 'containerError'>
          <h2 className = 'errorTitle'>'Error by fecth'</h2>
        </div>
      )
    }
    return <ListRoom
            idPresentRoom = { this.props.idRoom }
            rooms = { this.state.rooms } />
  }

  render () {
    return (
      <div className="containerMain">
        <Filter
          filterType = { this._handleFilterType }
          orderPrice = { this._handleOrdertype }
          rooms = { this.state.rooms }/>
        { this._printListRoom() }
      </div>
    )
  }
}

export default Main;
