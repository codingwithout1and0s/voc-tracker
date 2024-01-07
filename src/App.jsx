import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './styles/styles.css'

import Header from './components/Header'
import FullStats from './components/FullStats'
import FullComments from './components/FullComments'
import Home from './Pages/Home'
import LoginPage from './Pages/LoginPage'

import { LoginContext, CSATContext } from './Contexts/Contexts'

function App() {

  const [Login, setLogin] = useState({username: "", loggedin: false});
  const [avgCsat, setAvgCsat] = useState(0);

  return (
    <>
      <LoginContext.Provider value={{ Login, setLogin }}>
      <CSATContext.Provider value={{ avgCsat, setAvgCsat }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="full-stats" element={<FullStats />} />
          <Route path="full-comments" element={<FullComments />} />
        </Routes>
      </Router>
      </CSATContext.Provider>
      </LoginContext.Provider>
    </>
  )
}

export default App
