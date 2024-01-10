import { useState } from 'react'
import Stats from '../components/Stats'
import Comments from '../components/Comments'
import Charts from '../components/Charts'

function Home() {
  const [trending, setTrending] = useState(false);
  return (
    <div>
        <Stats />

        <div className='mx-5 mt-5'>
          <button onClick={() => setTrending(false)}>Voice Feedback</button>
          <button 
            onClick={() => setTrending(true)}
            className='mx-3'
          >
            Trending</button>
        </div>
        <div className='m-5 border border-1'>
        { !trending ? 
          <Comments /> :
          <Charts /> 
        }
        </div>
    </div>
  )
}

export default Home
