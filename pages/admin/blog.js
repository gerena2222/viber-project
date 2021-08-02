import prisma from "../../client.ts";
import { useForm } from "react-hook-form";
import AdminLayout from "./component/admin-layout";
import { useState } from "react";
export async function getServerSideProps(contex) {
  const dataBlog = await prisma.blog.findMany();
  return {
    props: { dataBlog },
  };
}
const AddData = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form onSubmit={handleSubmit(props.onSubmit)} className="form">
      <div className="row">
        <div className="col-md-3">
          <label htmlFor="inputBlog" className="form-label">
            Nama Blog
          </label>
          <input
            {...register("blogNama", { required: true })}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputBlog" className="form-label">
            Gambar Blog
          </label>
          <input
            {...register("blogGambar", { required: true })}
            type="url"
            className="form-control"
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputBlog" className="form-label">
            Tanggal blog
          </label>
          <input
            {...register("blogTanggal", { required: true })}
            type="date"
            className="form-control"
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputBlog" className="form-label">
            Video Blog
          </label>
          <input
            {...register("blogVideo", { required: true })}
            type="url"
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputBlog" className="form-label">
            Deskripsi blog
          </label>
          <textarea
            {...register("blogDeskripsi", { required: true })}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputBlog" className="form-label">
            Khasiat blog
          </label>
          <textarea
            {...register("blogKhasiat", { required: false })}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputBlog" className="form-label">
            Manfaat blog
          </label>
          <textarea
            {...register("blogManfaat", { required: false })}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-12 mt-3 mb-3">
          <button type="submit" className="btn btn-primary">
            Masukkan Data
          </button>
        </div>
      </div>
    </form>
  );
};
const AdminBlog = (props) => {
  const [dataBlog, setdataBlog] = useState(props.dataBlog);
  return (
    <AdminLayout>
      <div className="container-fluid px-4">
        <h1 className="mt-4">Blog Kami</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item ">Dashboard</li>
          <li className="breadcrumb-item active">Blog</li>
        </ol>
        <AddData
          onSubmit={async (data, e) => {
            const blog = {
              blogNama: data.blogNama,
              blogGambar: data.blogGambar,
              blogVideo: data.blogVideo,
              blogTanggal: data.blogTanggal,
              blogDeskripsi: data.blogDeskripsi,
              blogPenjelasan: data.blogPenjelasan,
            };
            try {
              const res = await fetch("/api/blog/create", {
                method: "POST",
                body: JSON.stringify(blog),
              });
              if (!res.ok) throw new Error(res.statusText);
              let status = await res.json();
              if (status !== null) {
                location.reload();
                alert("Data Berhasil Masuk");
                setdataBlog([...dataBlog, blog]);
              }
            } catch (error) {
              console.log(error);
            }
          }}
        />
        <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-table me-1"></i>
            Data blogs Viber
          </div>
          <div className="card-body">
            <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
              <div className="dataTable-container">
                <table id="datatablesSimple" className="dataTable-table">
                  <thead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Nama blogs</th>
                      <th scope="col">Gambar blogs</th>
                      <th scope="col">Video blogs</th>
                      <th scope="col">Tanggal blogs</th>
                      <th scope="col">Deskripsi blogs</th>
                      <th scope="col">Penjelasan blogs</th>
                      <th scope="col">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.dataBlog.map((blog, nomor = 1) => (
                      <tr key={blog.id}>
                        <td>{nomor + 1}</td>
                        <td>{blog.blogNama}</td>
                        <td>{blog.blogGambar}</td>
                        <td>{blog.blogVideo}</td>
                        <td>{blog.blogTanggal}</td>
                        <td>{blog.blogDeskripsi}</td>
                        <td>{blog.blogPenjelasan}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#modal-hapus"
                          >
                            <span className="fas fa-trash"></span>
                          </button>
                          <div
                            className="modal fade"
                            id="modal-hapus"
                            tabIndex="-1"
                            aria-labelledby="modal-hapus"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-sm modal-dialog-centered">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                  >
                                    Modal title
                                  </h5>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div className="modal-body">
                                  <p>Apakah anda ingin menghapus item ini</p>
                                </div>
                                <div className="modal-footer justify-content-center">
                                  <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-bs-dismiss="modal"
                                  >
                                    <span className="far fa-times-circle me-2"></span>
                                    Close
                                  </button>
                                  <button
                                    className="btn btn-primary"
                                    onClick={async (e) => {
                                      try {
                                        const res = await fetch(
                                          "/api/blog/delete",
                                          {
                                            method: "POST",
                                            body: JSON.stringify(blog),
                                          }
                                        );
                                        if (!res.ok)
                                          throw new Error(res.statusText);
                                        console.log("kontol");
                                        location.reload();
                                        alert("Data Berhasil dihapus");
                                      } catch (error) {
                                        console.log(error);
                                      }
                                    }}
                                  >
                                    <span className="fas fa-trash me-2"></span>
                                    Hapus
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
export default AdminBlog;
