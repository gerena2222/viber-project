import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">
            <img
              src="https://res.cloudinary.com/kurogaze/image/upload/v1628492331/Opsi_3_srt0u6.png"
              alt="logoImage"
              className="me-2"
              height="60px"
              width="auto"
            />
            <span className="navbar-branded">Viber.Id </span>
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-beetwen"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/">
                <a
                  className={
                    router.pathname == "/" ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/produk/">
                <a
                  className={
                    router.pathname == "/produk/"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Products
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/kegiatan/">
                <a
                  className={
                    router.pathname == "/kegiatan/"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Events
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/mitra">
                <a
                  className={
                    router.pathname == "/mitra" ? "nav-link active" : "nav-link"
                  }
                >
                  Mitra
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog/">
                <a
                  className={
                    router.pathname == "/blog/" ? "nav-link active" : "nav-link"
                  }
                >
                  Blog
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">About Me</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
