import { Routes, Route } from 'react-router-dom'
import './styles/styles.css'

import Header from './components/Header'
import FullComments from './components/FullComments'
import Settings from './Pages/Settings'
import VocOverview from './Pages/VocOverview'

import Home from './Pages/Home'
import LoginPage from './Pages/LoginPage'
import AdminPanel from './Pages/AdminPanel'
import ErrorPage from './Pages/ErrorPage'

import { CsatProvider } from './Contexts/CsatContext'
import { AuthProvider } from './Contexts/AuthContext'
import { AdminTitleProvider } from './Contexts/AdminTitleContext'

function App() {

  return (
    <div style={{ background:' #efeeee'}}>
      <AuthProvider>
        <Header />
        <CsatProvider>
        <AdminTitleProvider>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPanel />}>
            <Route path="settings" element={<Settings />} />
            <Route path="voc-overview" element={<VocOverview />} />
          </Route>
          <Route path="full-comments" element={<FullComments />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        </AdminTitleProvider>
        </CsatProvider>
        </AuthProvider>
    </div>
  )
}

export default App
