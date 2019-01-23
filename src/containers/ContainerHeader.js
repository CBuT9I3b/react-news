import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { LinearProgress, NavBar } from '../components'

class ContainerHeader extends Component {
  render() {
    const { isLoading } = this.props;
    return (
      <div>
        {isLoading && <LinearProgress />}
        <NavBar />
      </div>
    )
  }
}

ContainerHeader.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  const { selectedType, content } = state;
  const { isLoading } = content[selectedType] || { isLoading: false };
  return { isLoading }
};

export default connect(mapStateToProps)(ContainerHeader)
