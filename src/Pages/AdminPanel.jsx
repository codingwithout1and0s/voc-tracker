import { useContext } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'
import AdminSidebar from "../components/AdminSidebar"
import { AdminTitleContext } from "../Contexts/AdminTitleContext"

function AdminPanel() {
  const { title } = useContext(AdminTitleContext);
  return (
    <div id="admin-panel">
        <AdminSidebar />
        <h1 className="text-center">{adminTitle}</h1>
        <Outlet context={[adminTitle, setAdminTitle]} />
    </div>
  )
}

export default AdminPanel
