import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/styles.css'
import Header from './components/Header'
import Stats from './components/Stats'
import FullStats from './components/FullStats'
import Comments from './components/comments'
import FullComments from './components/FullComments'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Stats />
        <Comments />
        
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="full-stats" element={<FullStats />} />
            <Route path="full-comments" element={<FullComments />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
