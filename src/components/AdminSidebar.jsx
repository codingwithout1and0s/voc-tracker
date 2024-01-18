import { useState } from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {

    const [clicked, setClicked] = useState(false);

    const panelClickHandler = () => {
      setClicked((prev) => !prev);
    }

  return (
    <aside 
        id="sidebar" 
        className={`px-3 text-white d-flex flex-column ${clicked ? "hide-panel" : ""}`} 
        style={{ 
        background:'#15151A', 
        width: '250px',
        height: '100svh',
        marginTop: '-5vh'}}>

        <button 
          type="button" 
          id="burger-button"
          onClick={() => panelClickHandler()}
        > X </button>

          <h3 className="py-3 text-center">Sidebar</h3>
          <ul>
            <li><Link to="voc-overview">VOC Overview</Link></li>
            <li><Link to="settings">Settings</Link></li>
          </ul>
      </aside>
  )
}

export default AdminSidebar