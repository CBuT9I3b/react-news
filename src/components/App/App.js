import React from 'react'

import { ContainerProgress } from '../../containers'
import { Header, Routes } from '..'

const App = () => (
  <>
    <ContainerProgress />
    <Header />
    <main>
      <Routes />
    </main>
  </>
);

export default App
