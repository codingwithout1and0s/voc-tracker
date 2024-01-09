function AdminPanel() {

  return (
    <div>
        <aside className="px-3 text-white" style={{ 
          background:'#1A174A', 
          width: '350px',
          height: '100vw',
          marginTop: '-50px'}}>
            <h1 className="py-3 text-center">Sidebar</h1>
            <ul>
              <li>Service Leaders</li>
              <li>Agents</li>
            </ul>
        </aside>
        <h1> Admin Panel</h1>
    </div>
  )
}

export default AdminPanel
