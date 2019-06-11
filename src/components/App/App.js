import React, { Fragment } from 'react'

import { Routes } from '..'
import { ContainerHeader } from '../../containers'

const App = () => (
  <Fragment>
    <ContainerHeader />
    <main className='container'>
      <div className='row'>
        <br />
        <Routes />
      </div>
    </main>
  </Fragment>
);

export default App
