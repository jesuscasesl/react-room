import React from 'react'
import PropTypes from 'prop-types'

import './Filter.css'

import Dropdown from './../Dropdown/Dropdown'
import Download from './../Download/Download'

const Filter = props => {
  const {
    filterType,
    orderPrice,
    rooms } = props

  const _handleChangeFilter = selected => {
    filterType( selected )
  }

  const _handleChangeOrder = selected => {
    orderPrice( selected )
  }

  return (
    <aside className = 'containerFilter'>
      <h2 className = 'filterTitle'>Filters:</h2>
      <div className = 'containerDropdownDownload'>
        <div className = 'containerAllDropdown'>
          <Dropdown
            labelDropdown = 'Property type:'
            onChangeProperty = { _handleChangeFilter }
            typeDropdown = 'type' >
              <option value = 'default'> - Select - </option>
              <option value = '0'>All</option>
              <option value = '6000'>Apartment</option>
              <option value = '6001'>Room</option>
          </Dropdown>
          <Dropdown
            labelDropdown = 'Sort by price:'
            onChangeProperty = { _handleChangeOrder }
            typeDropdown = 'price' >
              <option value='default'> - Select - </option>
              <option value='asc'>Ascending</option>
              <option value='desc'>Descending</option>
          </Dropdown>
        </div>
        <div className = 'containerDownload'>
          <Download
            jsonRooms = { rooms }></Download>
        </div>
      </div>
    </aside>
  )
}

Filter.propsTypes = {
  filterType: PropTypes.func,
  orderPrice: PropTypes.func,
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

Filter.defaultProps = {
  rooms: {
    adId: 122836,
    id: 122836
  }
}

export default Filter
