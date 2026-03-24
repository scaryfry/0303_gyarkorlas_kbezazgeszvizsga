import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllPizza from './Pages/AllPizza.tsx'
import Cart from './Pages/Cart.tsx'
import Header from './Header.tsx'
import OnePizza from './Pages/OnePizza.tsx'
import Login from './Pages/Login.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Header/>
  <BrowserRouter>
  <Routes>
    <Route path='/' element = {<AllPizza></AllPizza>}></Route>
    <Route path='/:id' element = {<OnePizza></OnePizza>}></Route>
    <Route path='/login' element = {<Login/>}></Route>
    <Route path='/kart' element = {<Cart></Cart>}></Route>
    <Route path='*' element={<><h1>404 az oldal nem található!</h1></>}></Route>
  </Routes>
  </BrowserRouter>
  <ToastContainer></ToastContainer>
  </StrictMode>,
)
