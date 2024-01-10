import { useState } from 'react'
import Stats from '../components/Stats'
import Comments from '../components/Comments'
import Charts from '../components/Charts'

function Home() {
  const [trending, setTrending] = useState(false);
  return (
    <div id="home" >
        <Stats />

        <div className='mx-5 mt-4'>
          <button 
            onClick={() => setTrending(false)}
            className={` btn ${!trending ? 'btn-success' : 'btn-light btn-outline-secondary'}`}
          >
              Voice Feedback</button>
          <button 
            onClick={() => setTrending(true)}
            className={`btn mx-3 ${trending ? 'btn-success' : 'btn-light btn-outline-secondary'}`}
          >
            Trending</button>
        </div>
        <div id="main-panel" className='border border-1'>
        { !trending ? 
          <Comments /> :
          <Charts /> 
        }
        </div>
    </div>
  )
}

export default Home
