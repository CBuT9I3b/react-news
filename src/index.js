import React from 'react'
import { render } from 'react-dom'

import M from 'materialize-css/dist/js/materialize'

import './index.sass'

import { Root } from './containers'

render(<Root />, document.getElementById('root'));

M.AutoInit();
