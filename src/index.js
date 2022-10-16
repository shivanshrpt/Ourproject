import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { store } from "./Store"
import { BrowserRouter } from "react-router-dom"

import App from "./Components/App"




ReactDOM.render(
    
  <Provider  store = {store}>
    <BrowserRouter><App/></BrowserRouter >
    </Provider>
   , document.getElementById("root")
)