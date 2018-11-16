import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App'

const container = (
    <Fragment>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Fragment>

)

ReactDOM.render(container, document.getElementById('root'))
