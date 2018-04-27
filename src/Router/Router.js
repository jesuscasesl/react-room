import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from './../Pages/MainPage/MainPage'
import DetailsPage from './../Pages/DetailsPage/DetailsPage'
import NotFoundPage from './../Pages/NotFoundPage/NotFoundPage'

const Router = () => {
  return (
      <Switch>
        <Route
          exact
          path = '/'
          component = { MainPage }/>
        <Route
          path = '/id/:id'
          component = { MainPage }/>
        <Route
          path = '/details/:id'
          component = { DetailsPage }/>
        <Route
          path = '*'
          component = { NotFoundPage } />
      </Switch>
  )
}

export default Router;
