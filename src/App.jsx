import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BuyerLogin from './pages/BuyerLogin'
import BuyerRegister from './pages/BuyerRegister'
import SellerLogin from './pages/SellerLogin'
import SellerRegister from './pages/SellerRegister'

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/buyer/login" element={<BuyerLogin />} />
          <Route path="/buyer/register" element={<BuyerRegister />} />
          <Route path="/seller/login" element={<SellerLogin />} />
          <Route path="/seller/register" element={<SellerRegister />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
