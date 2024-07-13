// Global Style
import './App.css'
// Hooks
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Context
import { AuthProvider } from './context/AuthProvider'

import PrivateRoute from './components/PrivateRoute'

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

            {/* 公開路由: 註冊 / 登入 / 重設 */}
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/reset" element={<Reset />} />

            <Route path="/" element={<Layout />}>

              {/* 公開路由 */}
              <Route index element={<Home />} />

              {/* 限制路由 */}
              <Route element={<PrivateRoute />}>
                <Route path="/profile" element={<Profile />} />
              </Route>

            </Route>

            {/* 錯誤路由 */}
            <Route path="*" element={<NotFound />} />

          </Routes>

        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
