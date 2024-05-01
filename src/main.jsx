import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routa } from './assets/components/.index/Routa.jsx'
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routa/>
  </BrowserRouter>
)
