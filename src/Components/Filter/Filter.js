import React from 'react'
import PropTypes from 'prop-types'

import './Filter.css'

import Dropdown from './../Dropdown/Dropdown'
import Download from './../Download/Download'

const Filter = props => {

  const {
    filterType,
    orderPrice,
    rooms,
  } = props

  const _handleChangeType = selected => {
    filterType( selected )
  }

  const _handleChangePrice = selected => {
    orderPrice( selected )
  }

  return (
    <aside className = 'containerFilter'>
      <h2 className = 'filterTitle'>Filters:</h2>
      <div className = 'containerDropdownDownload'>
        <div className = 'containerAllDropdown'>
          <Dropdown
            typeDropdown = 'type'
            labelDropdown = 'Property type:'
            onChangeProperty = { _handleChangeType } >
              <option value='default'> - Select - </option>
              <option value='0'>All</option>
              <option value='6000'>Apartment</option>
              <option value='6001'>Room</option>
          </Dropdown>
          <Dropdown
            labelDropdown = 'Sort by price:'
            onChangeProperty = { _handleChangePrice }
            typeDropdown = 'price' >
              <option value='default'> - Select - </option>
              <option value='asc'>Ascending</option>
              <option value='desc'>Descending</option>
          </Dropdown>
        </div>

        <div className = 'containerDownload'>
          <Download
            roomJson = { rooms }></Download>
        </div>
      </div>
    </aside>
  )
}

Filter.propsTypes = {
  filterType: PropTypes.func,
  orderPrice: PropTypes.func,
  rooms: PropTypes.array
}

export default Filter
