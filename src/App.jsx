import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './components/Sign/SignUp.jsx'
import SignIn from './components/Sign/SignIn.jsx'


import Test1 from './pages/SignUp/Step1'
import Test2 from './pages/SignUp/Step2'
import Test3 from './pages/SignUp/Step3'
import Test4 from './pages/SignUp/Step4'
import Test5 from './pages/SignIn/Step1'
import Test6 from './pages/SignIn/Step1'

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp/test1" element={<Test1 />} />
          <Route path="/signUp/test2" element={<Test2 />} />
          <Route path="/signUp/test3" element={<Test3 />} />
          <Route path="/signUp/test4" element={<Test4 />} />
          <Route path="/signIn/test1" element={<Test5 />} />
          <Route path="/signIn/test2" element={<Test6 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
