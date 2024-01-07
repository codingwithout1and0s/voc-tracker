import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './styles/styles.css'

import Header from './components/Header'
import FullStats from './components/FullStats'
import FullComments from './components/FullComments'
import Charts from './components/Charts'
import Home from './Pages/Home'

import { CSATContext } from './Contexts/CSATContext'

function App() {

  const [avgCsat, setAvgCsat] = useState(0);

  return (
    <>
      <CSATContext.Provider value={{ avgCsat, setAvgCsat }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="full-stats" element={<FullStats />} />
          <Route path="full-comments" element={<FullComments /> } />
        </Routes>
        <Charts />
      </Router>
      </CSATContext.Provider>
    </>
  )
}

export default App
