import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/styles.css'

import Header from './components/Header'
import FullStats from './components/FullStats'
import FullComments from './components/FullComments'
import Home from './Pages/Home'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="full-stats" element={<FullStats />} />
          <Route path="full-comments" element={<FullComments /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
