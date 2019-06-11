import React, { Component, Fragment } from 'react'
import { createPortal } from 'react-dom'
import M from 'materialize-css'

class Modal extends Component {
  constructor(props) {
    super(props);
    this.createRoot()
  }

  createRoot = () => {
    this.modalRoot = document.createElement('div');
    document.body.appendChild(this.modalRoot)
  };

  componentDidMount() {
    this.modal = M.Modal.init(this._modal)
  }

  componentWillUnmount() {
    document.body.removeChild(this.modalRoot);
    this.modal && this.modal.destroy()
  }

  renderModal = () => {
    return (
      this.modalRoot && createPortal(
        <div
          ref={ div => { this._modal = div } }
          className='modal'
        >
          <div className='modal-content'>
            { null }
          </div>
          <div className='modal-footer'>
            { null }
          </div>
        </div>,
        this.modalRoot
      )
    )
  };

  onOpen = event => {
    event && event.preventDefault();
    this.modal && this.modal.open()
  };

  onClose = event => {
    event && event.preventDefault();
    this.modal && this.modal.close()
  };

  render() {
    let { trigger } = this.props;

    return (
      <Fragment>
        { trigger && React.cloneElement(trigger, { onClick: this.onOpen }) }
        { this.renderModal() }
      </Fragment>
    )
  }
}

export default Modal
