import React, { Component, Fragment } from 'react'

import { withItem } from '../../hocs'

import { Item } from '..'

const styleOverlay = {
  zIndex: '1002',
  display: 'block',
  opacity: '0.5'
};

const styleModal = {
  zIndex: '1003',
  display: 'block',
  opacity: '1',
  top: '10%'
};

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
    let { isLoading, isError, item } = this.props;

    return (
      <Fragment>
        <div onClick={this.onBack} style={styleOverlay} className='modal-overlay' />
        {!isLoading && (
          <div style={styleModal} className='modal'>
            <div className='modal-content'>
              <Item isError={isError} item={item} />
            </div>
            <div className='modal-footer'>
              <button onClick={this.onBack} className='btn-flat waves-effect waves-red'>Close</button>
            </div>
          </div>
        )}
      </Fragment>
    )
  }
}

export default withItem(ModalItem)
