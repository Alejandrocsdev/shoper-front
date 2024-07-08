import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Terms from './pages/Terms'
import PrivacyPolicy from './pages/PrivacyPolicy'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Reset from './pages/Reset'
import OTP from './pages/SignUpSteps/Step1'
import Password from './pages/ResetSteps/Step3'
import End from './pages/SignUpSteps/Step3'

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="terms" element={<Terms />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
          </Route>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/password" element={<Password />} />
          <Route path="/end" element={<End />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
