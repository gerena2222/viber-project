const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <div className="container">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Follow Sosial Media Kami :</span>
          </div>
          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-7 col-lg-8 col-xl-7 mx-auto mb-4">
                <h4 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Viber by Omah Sayur
                </h4>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              <div className="col-md-5 col-lg-4 col-xl-4 mx-auto mb-md-0 mb-4">
                <h4 className="text-uppercase fw-bold mb-4">Contact</h4>
                <p>
                  <i className="fas fa-home me-3"></i> Jl. Airlangga, Kebalenan,
                  Kec. Banyuwangi, Kabupaten Banyuwangi
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  omahsayurrrr@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> +6282336954917
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="text-center p-4 footer-color">
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="#">
          Viber by Omah Sayur
        </a>
      </div>
    </footer>
  );
};
export default Footer;
