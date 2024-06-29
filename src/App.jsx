import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUpFlow from './components/Sign/SignUpFlow.jsx'

import Test1 from './pages/SignUp/Step1'
import Test2 from './pages/SignUp/Step2'
import Test3 from './pages/SignUp/Step3'

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUpFlow />} />
          <Route path="/signUp/test1" element={<Test1 />} />
          <Route path="/signUp/test2" element={<Test2 />} />
          <Route path="/signUp/test3" element={<Test3 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
