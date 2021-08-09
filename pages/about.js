import MainLayout from "../component/main-layout";
import Heroku from "../component/heroku-all";
const About = () => {
  return (
    <MainLayout title="About">
      <Heroku title="Tentang Kami" />
      <section className="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img
                  src="https://res.cloudinary.com/kurogaze/image/upload/v1628492331/Opsi_3_srt0u6.png"
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-header">
                  <h4>Tentang Kami</h4>
                  <h2>Viber Since 2021</h2>
                </div>
                <div className="about-text">
                  <p>
                    Viber adalah produk minuman kesehatan berekstrak sayur dan
                    rempah yang memiliki rasa unik dan dapat dirasakan
                    khasiatnya didalam tubuh
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
export default About;
