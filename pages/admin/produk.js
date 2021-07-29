import prisma from "../../client.ts";
import { useForm } from "react-hook-form";
import AdminLayout from "./component/admin-layout";
import { useState } from "react";

export async function getServerSideProps(contex) {
  const dataProduk = await prisma.produk.findMany();

  return {
    props: { dataProduk },
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
        <div className="col-md-4">
          <label htmlFor="inputProduk" className="form-label">
            Nama Produk
          </label>
          <input
            {...register("produkNama", { required: true })}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputProduk" className="form-label">
            Gambar Produk
          </label>
          <input
            {...register("produkGambar", { required: true })}
            type="url"
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputProduk" className="form-label">
            Tanggal Produk
          </label>
          <input
            {...register("produkTanggal", { required: true })}
            type="date"
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputProduk" className="form-label">
            Deskripsi Produk
          </label>
          <textarea
            {...register("produkDeskripsi", { required: true })}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputProduk" className="form-label">
            Khasiat Produk
          </label>
          <textarea
            {...register("produkKhasiat", { required: false })}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputProduk" className="form-label">
            Manfaat Produk
          </label>
          <textarea
            {...register("produkManfaat", { required: false })}
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

const AdminProduk = (props) => {
  const [dataProduk, setDataProduk] = useState(props.dataProduk);
  return (
    <AdminLayout>
      <div className="container-fluid px-4">
        <h1 className="mt-4">Produk Kami</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item ">
            <a>Dashboard</a>
          </li>
          <li className="breadcrumb-item active">Produk</li>
        </ol>
        <AddData
          onSubmit={async (data, e) => {
            const produk = {
              produkNama: data.produkNama,
              produkGambar: data.produkGambar,
              produkDeskripsi: data.produkDeskripsi,
              produkManfaat: data.produkManfaat,
              produkKhasiat: data.produkKhasiat,
              produkTanggal: data.produkTanggal,
            };
            try {
              const res = await fetch("/api/produk/create", {
                method: "POST",
                body: JSON.stringify(produk),
              });
              if (!res.ok) throw new Error(res.statusText);
              let status = await res.json();
              if (status !== null) {
                location.reload();
                alert("Data Berhasil Masuk");
                setDataProduk([...dataProduk, produk]);
              }
            } catch (error) {
              console.log(error);
            }
          }}
        />
        <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-table me-1"></i>
            Data Produk Viber
          </div>
          <div className="card-body">
            <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
              <div className="dataTable-container">
                <table id="datatablesSimple" className="dataTable-table">
                  <thead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Nama Produk</th>
                      <th scope="col">Gambar Produk</th>
                      <th scope="col">Tanggal Produk</th>
                      <th scope="col">Deskripsi Produk</th>
                      <th scope="col">Manfaat Produk</th>
                      <th scope="col">Khasiat Produk</th>
                      <th scope="col">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.dataProduk.map((produk, nomor = 1) => (
                      <tr key={produk.id}>
                        <td>{nomor + 1}</td>
                        <td>{produk.produkNama}</td>
                        <td>{produk.produkGambar}</td>
                        <td>{produk.produkTanggal}</td>
                        <td>{produk.produkDeskripsi}</td>
                        <td>{produk.produkManfaat}</td>
                        <td>{produk.produkKhasiat}</td>
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
                                          "/api/produk/delete",
                                          {
                                            method: "POST",
                                            body: JSON.stringify(produk),
                                          }
                                        );
                                        if (!res.ok)
                                          throw new Error(res.statusText);
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
export default AdminProduk;
