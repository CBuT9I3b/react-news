import React from 'react'

import { Header, Routes } from '..'

const App = () => (
  <>
    <header>
      <Header />
    </header>
    <main>
      <section className='my--timeline'>
        <Routes />
      </section>
    </main>
  </>
);

export default App
