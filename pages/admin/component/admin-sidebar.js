import Link from "next/link";
const AdminSidebar = () => {
  return (
    <div id="layoutSidenav_nav">
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <Link href="/admin/">
              <a className="nav-link">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                Dashboard
              </a>
            </Link>
            <div className="sb-sidenav-menu-heading">Database</div>
            <Link href="/admin/produk">
              <a className="nav-link">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                Produk
              </a>
            </Link>
            <Link href="/admin/event">
              <a className="nav-link">
                <div className="sb-nav-link-icon">
                  <i className="fab fa-elementor"></i>
                </div>
                Event
              </a>
            </Link>
            <Link href="/admin/blog">
              <a className="nav-link">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-file"></i>
                </div>
                Blog
              </a>
            </Link>
            <div className="sb-sidenav-menu-heading">Addons</div>
            <a className="nav-link" href="charts.html">
              <div className="sb-nav-link-icon">
                <i className="fas fa-chart-area"></i>
              </div>
              Charts
            </a>
            <a className="nav-link" href="tables.html">
              <div className="sb-nav-link-icon">
                <i className="fas fa-table"></i>
              </div>
              Tables
            </a>
          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          Start Bootstrap
        </div>
      </nav>
    </div>
  );
};
export default AdminSidebar;
