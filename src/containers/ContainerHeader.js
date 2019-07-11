import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { LinearProgress, Header } from '../components'

const ContainerHeader = ({ isLoading }) => (
  <Fragment>
    {isLoading && <LinearProgress />}
    <Header />
  </Fragment>
);

ContainerHeader.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  let { selectedType, content } = state;
  let { isLoading } = content[selectedType] || { isLoading: false };
  return { isLoading }
};

export default connect(mapStateToProps)(ContainerHeader)
