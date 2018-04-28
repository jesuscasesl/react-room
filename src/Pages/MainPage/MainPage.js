import React from 'react';
import PropTypes from 'prop-types'

import Main from './../../Components/Main/Main'

const MainPage = props => {
  const { id } = props.match.params
  return (
    <Main
      idRoom = { id } />
  )
}

MainPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ])
    })
  })
}

export default MainPage
