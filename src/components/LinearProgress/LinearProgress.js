import React from 'react'

const style = {
  margin: '0',
  position: 'fixed',
  zIndex: '1004'
};

const LinearProgress = () => (
  <div style={style} className='progress red lighten-4'>
    <div className='indeterminate red' />
  </div>
);

export default LinearProgress
