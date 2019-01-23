import React from 'react'

import { Routes } from '..'
import { ContainerHeader } from '../../containers'

const App = () => (
  <div>
    <ContainerHeader />
    <div className='container'>
      <div className='row'>
        <Routes />
      </div>
    </div>
  </div>
);

export default App
