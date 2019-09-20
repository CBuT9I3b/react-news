import React, { Component } from 'react'

import './ModalItem.sass'

import { Item } from '..'

class ModalItem extends Component {
  componentDidMount() {
    document.body.style.overflowY = 'hidden'
  }

  componentWillUnmount() {
    document.body.style.overflowY = 'scroll'
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
        <div onClick={this.onBack} className='modal-overlay my--modal--overlay' />
        <div className='modal my--modal'>
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
