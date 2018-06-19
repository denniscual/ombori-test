import React from 'react'
import ReactDOM from 'react-dom'
// components
import App from './scenes/App'
// utils
import registerServiceWorker from './utils/registerServiceWorker'
// injected css
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
