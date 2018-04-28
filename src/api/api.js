export function fetchRoom( url, idRoom = 122836 ){
  return fetch(`${url}${idRoom}`)
  .then( res => res.json() )
}
