import prisma from "../../../client.ts";
import MainLayout from "../../../component/main-layout";

export async function getServerSideProps(contex) {
  let id = contex.params.id;
  let data = await prisma.kegiatan.findUnique({
    where: {
      id: Number(id),
    },
  });
  let {
    eventNama,
    eventGambar,
    eventDeskripsi,
    eventPenjelasan,
    eventTanggal,
  } = data;
  return {
    props: {
      eventNama,
      eventGambar,
      eventDeskripsi,
      eventPenjelasan,
      eventTanggal,
    },
  };
}
const DetailEvent = (props) => {
  return (
    <MainLayout title={props.eventNama}>
      <section className="single">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="single-content">
                <img src={props.eventGambar} />
                <h2>{props.eventNama}</h2>
                <p align="justify">{props.eventDeskripsi}</p>
                <p align="justify">{props.eventPenjelasan}</p>
              </div>

              <div className="single-bio">
                <div className="single-bio-img">
                  <img src="https://res.cloudinary.com/kurogaze/image/upload/v1628496772/neko-nekochan_eus1cw.png" />
                </div>
                <div className="single-bio-text">
                  <h3>Author Name</h3>
                  <p>Neko-Neko Chan</p>
                </div>
              </div>
              <div className="comment-form">
                <h2>Leave a comment</h2>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      cols="30"
                      rows="5"
                      className="form-control"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Post Comment"
                      className="btn btn-primary mt-2"
                    />
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar">
                <div className="sidebar-widget">
                  <div className="search-widget">
                    <form>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Search eyword"
                      />
                      <button className="btn">
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>

                <div className="sidebar-widget">
                  <div className="image-widget">
                    <a href="#">
                      <img
                        src="https://res.cloudinary.com/kurogaze/image/upload/v1628493963/telang1_xmvoia.jpg"
                        alt="Image"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
export default DetailEvent;
