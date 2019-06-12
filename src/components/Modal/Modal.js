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
    let { title, type, by, text, url, kids, score, time } = this.props;

    return (
      this.modalRoot && createPortal(
        <div
          ref={ div => { this._modal = div } }
          className='modal no-autoinit'
        >
          <div className='modal-content'>
            {title && <h5>{title}</h5>}

            <p>
              {type && by && `${type} by ${by} | `}

              {time && new Date((time * 1000)).toLocaleString()}
            </p>

            {text && <p dangerouslySetInnerHTML={{ __html: text }} />}

            {url && (
              <p><a href={url} target='_blank' rel='noreferrer noopener'>
                {url.split('/')[2]}
              </a></p>
            )}

            <p>
              {score && `${score} points `}

              {kids && `${kids.length} comments`}
            </p>
          </div>
          <div className='modal-footer'>
            <button className='btn-flat waves-effect waves-red modal-close'>
              Close
            </button>
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
