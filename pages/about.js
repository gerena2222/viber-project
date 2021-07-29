import MainLayout from "../component/main-layout";
import Heroku from "../component/heroku-all";
import Image from "next/image";
const About = () => {
  return (
    <MainLayout title="About">
      <Heroku title="Tentang Kami" />
      <section className="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <Image src="https://placeimg.com/960/780/nature" alt="Image" />
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec pretium mi. Curabitur facilisis ornare velit
                    non vulputate. Aliquam metus tortor, auctor id gravida
                    condimentum, viverra quis sem.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec pretium mi. Curabitur facilisis ornare velit
                    non vulputate. Aliquam metus tortor, auctor id gravida
                    condimentum, viverra quis sem. Curabitur non nisl nec nisi
                    scelerisque maximus. Aenean consectetur convallis porttitor.
                    Aliquam interdum at lacus non blandit.
                  </p>
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
