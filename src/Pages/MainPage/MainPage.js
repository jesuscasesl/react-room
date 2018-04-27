import React from 'react';
import PropTypes from 'prop-types'

import Main from './../../Components/Main/Main'

const MainPage = props => {
  return (
    <Main
      idRoom = { props.match.params.id }/>
  )
}

MainPage.propTypes = {
  match: PropTypes.object
}

export default MainPage;
