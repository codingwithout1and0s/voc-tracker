import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './styles/styles.css'

import Header from './components/Header'
import FullComments from './components/FullComments'
import AgentSettings from "./components/AgentSettings"
import SLSettings from "./components/SLSettings"

import Home from './Pages/Home'
import LoginPage from './Pages/LoginPage'
import AdminPanel from './Pages/AdminPanel'
import ErrorPage from './Pages/ErrorPage'

import { CsatProvider } from './Contexts/CsatContext'
import { AuthProvider } from './Contexts/AuthContext'
import { AdminTitleContext } from "./Contexts/Contexts"

function App() {

  const [title, setTitle] = useState("Admin Panel"); 

  return (
    <div style={{ background:' #efeeee'}}>
      <AuthProvider>
        <Header />
        <CsatProvider>
        <AdminTitleContext.Provider title={title} setTitle={setTitle}>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPanel />}>
            <Route path="agent-settings" element={<AgentSettings />} />
            <Route path="sl-settings" element={<SLSettings />} />
          </Route>
          <Route path="full-comments" element={<FullComments />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        </AdminTitleContext.Provider>
        </CsatProvider>
      </AuthProvider>
    </div>
  )
}

export default App
