import React, { Component } from 'react'

import { Item } from '..'

import { scrollWidth } from '../../utils'

class ModalItem extends Component {
  constructor(props) {
    super(props);
    this.prevTitle = document.title
  }

  componentDidMount() {
    document.body.style.overflowY = 'hidden';
    document.querySelector('nav').style.paddingRight = `${scrollWidth}px`;
    document.querySelector('main').style.paddingRight = `${scrollWidth}px`
  }

  componentWillUnmount() {
    document.title = this.prevTitle;
    document.body.style.overflowY = 'scroll';
    document.querySelector('nav').style.paddingRight = '0px';
    document.querySelector('main').style.paddingRight = '0px'
  }

  onBack = event => {
    let { history, prevLocation } = this.props;
    event.stopPropagation();
    history.replace(prevLocation)
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
