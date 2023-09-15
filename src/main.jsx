import React from 'react';
import App from './App.jsx'
import './index.css'
import {BrowserRouter,Routes, Route} from "react-router-dom"
import ReactDOM from 'react-dom/client'
import Home from './Routes/Home.jsx'
import Detail from './Routes/Detail.jsx'
import Favs from './Routes/Favs.jsx'
import Contact from './Routes/Contact.jsx'
import { DentistProvider } from './Components/utils/global.context.jsx'
import { ContextProvider } from './Components/utils/global.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
    <DentistProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/home' element={<Home />} />
          <Route path='detail/:id' element={<Detail />} />
          <Route path='contact' element={<Contact />} />
          <Route path='favs' element={<Favs />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </DentistProvider>
    </ContextProvider>
  </React.StrictMode>,
)
