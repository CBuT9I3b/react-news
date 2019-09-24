import React from 'react'

import { ContainerProgress } from '../../containers'
import { Header, Routes } from '..'

const App = () => (
  <>
    <ContainerProgress />
    <header>
      <Header />
    </header>
    <main>
      <section className='card-panel'>
        <Routes />
      </section>
    </main>
  </>
);

export default App
