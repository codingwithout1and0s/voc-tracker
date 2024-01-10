import { Outlet } from 'react-router-dom'
import AdminSidebar from "../components/AdminSidebar"

function AdminPanel() {

  return (
    <div>
        <AdminSidebar />
        <h1 className="text-center">Admin Panel</h1>
        <Outlet />
    </div>
  )
}

export default AdminPanel
