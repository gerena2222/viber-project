import Link from "next/link";
import prisma from "../../client.ts";
import Heroku from "../../component/heroku-all";
import MainLayout from "../../component/main-layout";

export async function getServerSideProps(contex) {
  const dataBlog = await prisma.blog.findMany();
  return {
    props: { dataBlog },
  };
}
const CardBlog = (props) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={props.blogGambar} className="img-fluid" />
        <div className="card-body">
          <div className="row">
            <h5 className="card-title">{props.blogNama}</h5>
            <p className="card-text">{props.blogTanggal}</p>
            <p className="blog-post-text">
              Berikut adalah video {props.blogNama}. Silahkan klik lanjutkan
              jika ingin melihat secara detail
            </p>
            <Link
              href="/blog/[id]/[kode]"
              as={`/blog/${props.id}/${props.blogNama
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
            >
              <a className="btn btn-primary">Lanjutkan</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
const Blog = (props) => {
  return (
    <MainLayout title="Blog">
      <Heroku title="Blog Kami" />
      <section className="blog-post mt-4">
        <div className="container">
          <div className="row">
            {props.dataBlog.map((blog) => (
              <CardBlog
                key={props.id}
                id={blog.id}
                blogGambar={blog.blogGambar}
                blogNama={blog.blogNama}
                blogTanggal={blog.blogTanggal}
              />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
export default Blog;
