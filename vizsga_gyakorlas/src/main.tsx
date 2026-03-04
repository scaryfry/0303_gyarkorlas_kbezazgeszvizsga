import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllPizza from './Pages/AllPizza.tsx'
import Cart from './Pages/Cart.tsx'
import Header from './Header.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Header/>
  <BrowserRouter>
  <Routes>
    <Route path='/pizzak' element = {<AllPizza></AllPizza>}></Route>
    <Route path='/kosar' element = {<Cart></Cart>}></Route>
    <Route path='*' element={<><h1>404 az oldal nem található!</h1></>}></Route>
  </Routes>
  </BrowserRouter>
  <ToastContainer></ToastContainer>
  </StrictMode>,
)
