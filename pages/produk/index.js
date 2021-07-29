import Link from "next/link";
import prisma from "../../client.ts";
import Heroku from "../../component/heroku-all";
import MainLayout from "../../component/main-layout";
import Image from "next/image";
export async function getServerSideProps(contex) {
  const dataProduk = await prisma.produk.findMany();
  return {
    props: { dataProduk },
  };
}

const CardProduk = (props) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <Image src={props.produkGambar} className="img-fluid" />
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <h5 className="card-title">{props.produkNama}</h5>
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled d-flex  ">
                <li>
                  <i className="fas fa-star" style={{ color: "#ffd700" }}></i>
                </li>
                <li>
                  <i className="fas fa-star" style={{ color: "#ffd700" }}></i>
                </li>
                <li>
                  <i className="fas fa-star" style={{ color: "#ffd700" }}></i>
                </li>
                <li>
                  <i className="fas fa-star" style={{ color: "#ffd700" }}></i>
                </li>
                <li>
                  <i
                    className="fas fa-star-half"
                    style={{ color: "#ffd700" }}
                  ></i>
                </li>
              </ul>
            </div>
          </div>
          <p className="card-text">{props.produkTanggal}</p>
          <Link
            href="/produk/[id]/[kode]"
            as={`/produk/${props.id}/${props.produkNama
              .replace(/\s+/g, "-")
              .toLowerCase()}`}
          >
            <a className="btn btn-primary">Lihat Detail</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
const Produk = (props) => {
  return (
    <MainLayout title="Produk">
      <Heroku title="Produk Kami" />
      <section className="produk-card mt-4" key={props.id}>
        <div className="container">
          <div className="row">
            {props.dataProduk.map((produk) => (
              <CardProduk
                id={produk.id}
                produkGambar={produk.produkGambar}
                produkNama={produk.produkNama}
                produkTanggal={produk.produkTanggal}
              />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
export default Produk;
