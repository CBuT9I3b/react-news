import React from 'react'
import { render } from 'react-dom'

import { Root } from './containers'

import M from 'materialize-css/dist/js/materialize'

import 'materialize-css/dist/css/materialize.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

render(<Root />, document.getElementById('root'));

M.AutoInit();
