import React from 'react'
import ReactDOM from 'react-dom'
// components
import Root from './scenes/Root/Root'
// utils
import registerServiceWorker from './utils/registerServiceWorker'
// injected css
import 'semantic-ui-css/semantic.min.css'

// registerServiceWorker
registerServiceWorker()

ReactDOM.render(<Root />, document.getElementById('root'))
