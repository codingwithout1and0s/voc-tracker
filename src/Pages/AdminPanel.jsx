import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from "../components/AdminSidebar"
import { AdminTitleContext } from "../Contexts/Contexts"

function AdminPanel() {
  const { title } = useContext(AdminTitleContext);
  return (
    <div id="admin-panel">
        <AdminSidebar />
        <h1 className="text-center">{title}</h1>
        <Outlet />
    </div>
  )
}

export default AdminPanel
