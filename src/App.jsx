import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BuyerLogin from './pages/BuyerLogin'
import SignUp from './components/Sign/SignUp.jsx'

import Test from './pages/Register/Step2'

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/signIn" element={<BuyerLogin />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signUp/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
