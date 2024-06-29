import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BuyerLogin from './pages/BuyerLogin'
import SignUp from './components/Sign/SignUp.jsx'

import Test2 from './pages/SignUp/Step2'
import Test3 from './pages/SignUp/Step3'
import Test4 from './pages/SignUp/Step4'

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/signIn" element={<BuyerLogin />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signUp/test2" element={<Test2 />} />
          <Route path="/signUp/test3" element={<Test3 />} />
          <Route path="/signUp/test4" element={<Test4 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
