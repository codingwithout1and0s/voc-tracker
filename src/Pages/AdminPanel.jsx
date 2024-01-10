import { useState } from 'react'
import { Link } from 'react-router-dom'

function AdminPanel() {

  const [clicked, setClicked] = useState(false);

  const panelClickHandler = () => {
    setClicked((prev) => !prev);
  }

  return (
    <div id="admin-panel">
        <aside className={`px-3 text-white d-flex flex-column ${clicked ? "hide-panel" : ""}`} style={{ 
          background:'#15151A', 
          width: '350px',
          height: '100vw',
          marginTop: '-50px'}}>

          <button 
            type="button" 
            id="burger-button"
            onClick={() => panelClickHandler()}
          > X </button>

            <h3 className="py-3 text-center">Sidebar</h3>
            <ul>
              <li><Link to="/admin-panel/sl-settings">Service Leaders</Link></li>
              <li><Link to="/admin-panel/agent-settings">Agents</Link></li>
            </ul>
        </aside>
        <h1 className="text-center">Admin Panel</h1>
    </div>
  )
}

export default AdminPanel
