import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './styles/styles.css'

import Header from './components/Header'
import FullStats from './components/FullStats'
import FullComments from './components/FullComments'
import Home from './Pages/Home'
import LoginPage from './Pages/LoginPage'

import { CSATContext } from './Contexts/Contexts'
import { AuthProvider } from './Contexts/AuthContext'

function App() {

  const [avgCsat, setAvgCsat] = useState(0);

  return (
    <>
      <AuthProvider>
        <Router>
          <Header />
          <CSATContext.Provider value={{ avgCsat, setAvgCsat }}>
          <Routes>
          <Route index element={<Home/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="full-stats" element={<FullStats />} />
            <Route path="full-comments" element={<FullComments />} />
          </Routes>
          </CSATContext.Provider>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
