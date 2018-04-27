export function orderByy(arrRoom, order = 'asc'){
  let roomsOrdered = arrRoom.sort(function (a, b){
    return (a.pricePerMonth - b.pricePerMonth)
  })
  if (order === 'desc') {
    roomsOrdered.reverse()
  }
  return roomsOrdered
}


export function filterBy(arrRoom, filterType = '0'){
  if ( filterType === '0' ) {
    return arrRoom
  }
  const roomsFiltered = arrRoom.filter( element => {
    return element.roomType[0] === parseInt(filterType, 10)
  })
  return roomsFiltered
}
