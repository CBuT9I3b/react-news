import React from 'react'

const withCard = Component => {
  return props => (
    <div className='card-panel'>
      <Component {...props} />
    </div>
  )
};

export default withCard
