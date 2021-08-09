import Link from "next/link";
import Image from "next/image";
const OwlTemplate = (props) => {
  return (
    <div className="me-2 ms-2">
      <div className="card card-owl">
        <img
          src={props.gambarProduk}
          className="image-card-owl owl-lazy"
          alt="produt-card"
        />
        <div className="card-body">
          <h5 className="card-title text-center">
            <button className="btn btn-primary" style={{ width: "100%" }}>
              {props.namaProduk}
            </button>
          </h5>
        </div>
      </div>
    </div>
  );
};

const ProductSlider = (props) => {
  return (
    <section className="content1  py-4 card">
      <div className="container">
        <div className="row justify-content-center">
          <span className="conten1-divider mb-4 "></span>
        </div>
        <div id="carousel0" className="owl-carousel owl-theme">
          <OwlTemplate
            namaProduk="Kelor"
            gambarProduk="https://res.cloudinary.com/kurogaze/image/upload/v1628493962/kelor1_rg1u8z.jpg"
            deskripsiProduk="Lorem Ipsum Dolor saskagshgajsgjag"
          />
          <OwlTemplate
            namaProduk="Labu"
            gambarProduk="https://res.cloudinary.com/kurogaze/image/upload/v1628493963/labu1_cd5vzd.jpg"
            deskripsiProduk="Lorem Ipsum Dolor saskagshgajsgjag"
          />
          <OwlTemplate
            namaProduk="Beetroot"
            gambarProduk="https://res.cloudinary.com/kurogaze/image/upload/v1628493963/beetroot1_gge7tu.jpg"
            deskripsiProduk="Lorem Ipsum Dolor saskagshgajsgjag"
          />
          <OwlTemplate
            namaProduk="Telang"
            gambarProduk="https://res.cloudinary.com/kurogaze/image/upload/v1628493963/telang1_xmvoia.jpg"
            deskripsiProduk="Lorem Ipsum Dolor saskagshgajsgjag"
          />
        </div>
        <div className="row justify-content-center">
          <Link href="/produk/">
            <a className="btn btn-primary card-load mt-2">Lihat Semua</a>
          </Link>
        </div>
        <div className="row justify-content-center">
          <span className="conten1-divider mt-4 "></span>
        </div>
      </div>
    </section>
  );
};
export default ProductSlider;
