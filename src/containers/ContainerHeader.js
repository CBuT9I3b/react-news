import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { LinearProgress, NavBar } from '../components'

const ContainerHeader = ({ isLoading }) => (
  <Fragment>
    {isLoading && <LinearProgress />}
    <NavBar />
  </Fragment>
);

ContainerHeader.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  const { selectedType, content } = state;
  const { isLoading } = content[selectedType] || { isLoading: false };
  return { isLoading }
};

export default connect(mapStateToProps)(ContainerHeader)
