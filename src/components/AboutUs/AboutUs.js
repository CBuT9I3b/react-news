import React from 'react'

import { ServiceMessage } from '..'

import { setTitle } from '../../utils'

const AboutUs = () => {
  setTitle('About Us');
  return (
    <ServiceMessage
      title='About Us'
      message='Mini hacker news clone implemented on react.js and redux.js'
    />
  )
};

export default AboutUs
