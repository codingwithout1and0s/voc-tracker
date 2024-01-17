import { useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import AdminSidebar from "../components/AdminSidebar"
import { useAdminTitle } from '../Contexts/AdminTitleContext'

function AdminPanel() {
  
  const { adminTitle, setAdminTitle } = useAdminTitle();
  useEffect(() => {
    setAdminTitle("Admin Panel");
  }, [])
  return (
    <div id="admin-panel">
        <AdminSidebar />
        <h1 className="text-center">{adminTitle}</h1>
        <Outlet />
    </div>
  )
}

export default AdminPanel
