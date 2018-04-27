import React from 'react'
import { Link } from 'react-router-dom';

import './NotFound.css'

import ImgNotFound from './../../Assets/img/house404.png'
import Button from './../Button/Button'

const NotFound = () => {
  return (
    <section className = 'containerNotFound'>
      <img
        className = 'imgNotFound'
        src = { ImgNotFound }
        alt = '404' />
      <h1 className = 'NotFoundTitle'>Oops! That page doesnt exist</h1>
      <Link to = '/'>
        <Button
          btnStyle = 'btn btnGreen'
          btnText= 'Home'/>
      </Link>
    </section>
  )
}

export default NotFound
