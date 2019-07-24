import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import { LinearProgress, Header } from '../components'

const ContainerHeader = ({ loading }) => (
  <Fragment>
    {loading && <LinearProgress />}
    <Header />
  </Fragment>
);

const mapStateToProps = state => {
  let { loading } = state;
  return { loading }
};

export default connect(mapStateToProps)(ContainerHeader)
