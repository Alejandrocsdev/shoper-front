import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BuyerLogin from './pages/BuyerLogin'
import BuyerRegister from './pages/BuyerRegister'
import SellerLogin from './pages/SellerLogin'

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/buyer/login" element={<BuyerLogin />} />
          <Route path="/buyer/register" element={<BuyerRegister />} />
          <Route path="/seller/login" element={<SellerLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
