import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Reset from './pages/Reset'
import OTP from './pages/SignUpSteps/Step1'
import XX from './pages/SignUpSteps/Step4'

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/xx" element={<XX />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
