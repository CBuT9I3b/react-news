import React from 'react'
import { render } from 'react-dom'

import { Root } from './containers'

import M from 'materialize-css/dist/js/materialize'

import './index.sass'

render(<Root />, document.getElementById('root'));

M.AutoInit();
