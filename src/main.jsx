import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "./assets/styles/global.css"
import store from './redux/store.js'


const root = ReactDOM.createRoot(document.getElementById('root'))

const rerenderEntireTree = store => {
  root.render(
    <BrowserRouter>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>
  )
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)