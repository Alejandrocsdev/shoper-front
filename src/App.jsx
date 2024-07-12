// Global Style
import './App.css'
// Hooks
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Context
import { AuthProvider } from './context/AuthProvider'

import Layout from './components/Layout'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Reset from './pages/Reset'

import Home from './pages/Home'
import Profile from './pages/Profile'
// Page Not Found
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/reset" element={<Reset />} />

            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
