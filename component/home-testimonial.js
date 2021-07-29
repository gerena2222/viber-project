import Image from "next/image";
const HomeTestimonial = () => {
  return (
    <section className="content2  pt-4">
      <div className="container-fluid px-lg-4 px-md-4">
        <div className="row justify-content-center">
          <h3 className="text-white text-center">TESTIMONI</h3>
          <span className="ukuran mt-2"></span>
          <div className="col-md-12">
            <div className="conten2-testi">
              <div id="carousel1" className="owl-carousel">
                <div className="item">
                  <div className="card text-center">
                    <Image
                      src="https://res.cloudinary.com/kurogaze/image/upload/v1627523001/andre_zuwapz.png"
                      className="card-image-testi"
                    />
                    <div className="card-body">
                      <h5>Andre Setiawan</h5>
                      <p className="card-text">
                        Enak Banget. Sebagai orang yang tidak sayur dan baru ini
                        ada sayuran dijadikan minuman rasanya enak.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="card text-center">
                    <img
                      src="https://res.cloudinary.com/kurogaze/image/upload/v1627523119/budi_b35ill.png"
                      className="card-image-testi"
                    />
                    <div className="card-body">
                      <h5>Budi Santoso</h5>
                      <p className="card-text">
                        Rasanya mantap. Cocok untuk berbuka puasa.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="card text-center">
                    <img
                      src="https://res.cloudinary.com/kurogaze/image/upload/v1627522852/risa_fuavqf.png"
                      className="card-image-testi"
                      width="30"
                    />
                    <div className="card-body">
                      <h5>Risa Wardani</h5>
                      <p className="card-text">
                        Minumannya enak semua. gak kemanisan apalagi yang kelor
                        rasanya mirip seperti matcha. Dan Tekstur boba kenyal
                        sekali.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeTestimonial;
