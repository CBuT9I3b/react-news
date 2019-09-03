import React, { Fragment } from 'react'

import { ContainerProgress } from '../../containers'
import { Header, Routes } from '..'

const App = () => (
  <Fragment>
    <ContainerProgress />
    <Header />
    <main className='container'>
      <Routes />
    </main>
  </Fragment>
);

export default App
