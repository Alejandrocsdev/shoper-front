import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Reset from './pages/Reset'

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
