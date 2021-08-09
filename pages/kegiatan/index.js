import Link from "next/link";
import prisma from "../../client.ts";
import Heroku from "../../component/heroku-all";
import MainLayout from "../../component/main-layout";
export async function getServerSideProps(contex) {
  const dataEvent = await prisma.kegiatan.findMany();
  return {
    props: { dataEvent },
  };
}
const CardEvent = (props) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={props.eventGambar} className="img-fluid" />
        <div className="card-body">
          <h5 className="card-title">{props.eventNama}</h5>
          <div className="row">
            <span className="card-text text-secondary">
              <i className="far fa-clock me-2 mb-2"></i>
              {props.eventTanggal}
            </span>
            <Link
              href="/produk/[id]/[kode]"
              as={`/produk/${props.id}/${props.eventNama
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
            >
              <a className="btn btn-primary">Lihat Detail</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
const Events = (props) => {
  return (
    <MainLayout title="Events">
      <Heroku title="Event Kami" />
      <section className="event-card mt-4">
        <div className="container">
          <div className="row">
            {props.dataEvent.map((kegiatan) => (
              <CardEvent
                key={props.id}
                id={kegiatan.id}
                eventGambar={kegiatan.eventGambar}
                eventNama={kegiatan.eventNama}
                eventTanggal={kegiatan.eventTanggal}
              />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
export default Events;
