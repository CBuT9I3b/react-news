import React from 'react'
import { connect } from 'react-redux'

import { LinearProgress } from '../components'

const ContainerProgress = ({ loading }) => (
  loading && <LinearProgress />
);

const mapStateToProps = state => {
  let { loading } = state;
  return { loading }
};

export default connect(mapStateToProps)(ContainerProgress)
