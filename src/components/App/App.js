import React from 'react'

import { Header, Routes } from '..'

const App = () => (
  <>
    <header>
      <Header />
    </header>
    <main>
      <div className='my--timeline'>
        <Routes />
      </div>
    </main>
  </>
);

export default App
