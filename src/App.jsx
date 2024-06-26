import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BuyerLogin from './pages/BuyerLogin'
import BuyerRegister from './pages/BuyerRegister'

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/buyer/login" element={<BuyerLogin />} />
          <Route path="/buyer/register" element={<BuyerRegister />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
