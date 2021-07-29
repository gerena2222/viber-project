import Head from "next/head";
import AdminFooter from "./admin-footer";
import AdminNavbar from "./admin-navbar";
import AdminSidebar from "./admin-sidebar";
const AdminLayout = (props) => {
  return (
    <>
      <Head>
        <title>Admin Panel</title>
        <link rel="stylesheet" href="/css/dashboard/styles.css" />
        <link rel="stylesheet" href="/css/dashboard/datatables.min.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css"
          rel="stylesheet"
        />
        <script src="/js/dashboard/scripts.js"></script>
        <script src="/js/dashboard/datatables-simple-demo.js"></script>
        <script src="/js/dashboard/datatables.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/simple-datatables@latest"></script>
      </Head>
      <div className="sb-nav-fixed">
        <AdminNavbar />
        <div id="layoutSidenav">
          <AdminSidebar />
          <div id="layoutSidenav_content">
            <main>{props.children}</main>
            <AdminFooter />
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminLayout;
