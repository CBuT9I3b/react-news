import React, { Component } from 'react'

import { Item } from '..'

const scrollWidth = window.innerWidth - document.documentElement.clientWidth;

class ModalItem extends Component {
  componentDidMount() {
    document.body.style.overflowY = 'hidden';
    document.querySelector('nav').style.paddingRight = `${scrollWidth}px`;
    document.querySelector('main').style.paddingRight = `${scrollWidth}px`
  }

  componentWillUnmount() {
    document.body.style.overflowY = 'scroll';
    document.querySelector('nav').style.paddingRight = '0px';
    document.querySelector('main').style.paddingRight = '0px'
  }

  onBack = event => {
    let { history } = this.props;
    event.stopPropagation();
    history.goBack()
  };

  render() {
    let { id } = this.props;

    return (
      <>
        <div onClick={this.onBack} className='my--modal--overlay' />
        <div className='my--modal'>
          <div className='modal-content'>
            <Item id={id} />
          </div>
          <div className='modal-footer'>
            <button onClick={this.onBack} className='btn-flat waves-effect waves-red'>Close</button>
          </div>
        </div>
      </>
    )
  }
}

export default ModalItem
