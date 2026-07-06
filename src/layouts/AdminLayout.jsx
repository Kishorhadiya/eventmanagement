import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/Admin/AdminNavbar";
import AdminSidebar from "../components/Admin/AdminSidebar";
import "./AdminLayout.css"

function AdminLayout() {
  return (
    <>
      <AdminNavbar />
      <div className="admin-container">
        <AdminSidebar />

        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
