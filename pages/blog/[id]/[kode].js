import prisma from "../../../client.ts";
import MainLayout from "../../../component/main-layout";

export async function getServerSideProps(contex) {
  let id = contex.params.id;
  let data = await prisma.blog.findUnique({
    where: {
      id: Number(id),
    },
  });
  let {
    blogNama,
    blogGambar,
    blogDeskripsi,
    blogVideo,
    blogTanggal,
    blogPenjelasan,
  } = data;
  return {
    props: {
      blogNama,
      blogGambar,
      blogDeskripsi,
      blogVideo,
      blogTanggal,
      blogPenjelasan,
    },
  };
}
const DetailBlog = (props) => {
  return (
    <MainLayout title={props.blogNama}>
      <section className="single">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="single-content">
                <img src={props.blogGambar} />
                <h2>{props.blogNama}</h2>
                <p>{props.blogDeskripsi}</p>
                <iframe
                  width="100%"
                  height="480"
                  src={props.blogVideo}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p>{props.blogPenjelasan}</p>
              </div>

              <div className="single-bio">
                <div className="single-bio-img">
                  <img src="https://res.cloudinary.com/kurogaze/image/upload/v1628496772/neko-nekochan_eus1cw.png" />
                </div>
                <div className="single-bio-text">
                  <h3>Author Name</h3>
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
                        placeholder="Search Keyword"
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
export default DetailBlog;
