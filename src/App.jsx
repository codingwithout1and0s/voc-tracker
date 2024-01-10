import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './styles/styles.css'

import Header from './components/Header'
import FullStats from './components/FullStats'
import FullComments from './components/FullComments'
import AgentSettings from "./components/AgentSettings"
import SLSettings from "./components/SLSettings"

import Home from './Pages/Home'
import LoginPage from './Pages/LoginPage'
import AdminPanel from './Pages/AdminPanel'
import ErrorPage from './Pages/ErrorPage'

//import { CSATContext } from './Contexts/Contexts'
import { CsatProvider } from './Contexts/CsatContext'
import { AuthProvider } from './Contexts/AuthContext'

function App() {

  return (
    <>
      <AuthProvider>
        <Header />
        <CsatProvider>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="full-stats" element={<FullStats />} />
          <Route path="full-comments" element={<FullComments />} />
          <Route path="/admin-panel/agent-settings" element={<AgentSettings />} />
          <Route path="/admin-panel/sl-settings" element={<SLSettings />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        </CsatProvider>
      </AuthProvider>
    </>
  )
}

export default App
