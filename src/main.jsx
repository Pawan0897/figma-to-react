import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import Layout from './components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';

import "./style/style.css"
// import "./style/mediaquery_css.css"
import "./style/mediaquery.css"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Layout />
    </StrictMode>
  </BrowserRouter>
)
