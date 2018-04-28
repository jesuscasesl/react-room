import _ from 'lodash'

export function orderByPrice( arrRoom, order = 'asc' ){
  return _.orderBy( arrRoom, ['pricePerMonth'], [order] );
}

export function filterBy( arrRoom, filterType = '0' ){
  if ( filterType === '0' ) {
    return arrRoom
  }
  return _.filter( arrRoom, { 'roomType': parseInt(filterType, 10) } )
}
