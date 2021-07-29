import prisma from "../../client.ts";
import { useForm } from "react-hook-form";
import AdminLayout from "./component/admin-layout";
import { useState } from "react";
export async function getServerSideProps(contex) {
  const dataKegiatan = await prisma.kegiatan.findMany();
  return {
    props: { dataKegiatan },
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
          <label htmlFor="inputEvents" className="form-label">
            Nama Event
          </label>
          <input
            {...register("eventNama", { required: true })}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputEvents" className="form-label">
            Gambar Event
          </label>
          <input
            {...register("eventGambar", { required: true })}
            type="url"
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputEvents" className="form-label">
            Tanggal Event
          </label>
          <input
            {...register("eventTanggal", { required: true })}
            type="date"
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEvents" className="form-label">
            Deskripsi event
          </label>
          <textarea
            {...register("eventDeskripsi", { required: true })}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEvents" className="form-label">
            Penjelasan event
          </label>
          <textarea
            {...register("eventKhasiat", { required: false })}
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
const AdminEvents = (props) => {
  const [dataKegiatan, setdataKegiatan] = useState(props.dataKegiatan);
  return (
    <AdminLayout>
      <div className="container-fluid px-4">
        <h1 className="mt-4">Event Kami</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item ">Dashboard</li>
          <li className="breadcrumb-item active">Event</li>
        </ol>
        <AddData
          onSubmit={async (data, e) => {
            const kegiatan = {
              eventNama: data.eventNama,
              eventGambar: data.eventGambar,
              eventTanggal: data.eventTanggal,
              eventDeskripsi: data.eventDeskripsi,
              eventPenjelasan: data.eventPenjelasan,
            };
            try {
              const res = await fetch("/api/kegiatan/create", {
                method: "POST",
                body: JSON.stringify(kegiatan),
              });
              if (!res.ok) throw new Error(res.statusText);
              let status = await res.json();
              if (status !== null) {
                location.reload();
                alert("Data Berhasil Masuk");
                setdataKegiatan([...dataKegiatan, kegiatan]);
              }
            } catch (error) {
              console.log(error);
            }
          }}
        />
        <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-table me-1"></i>
            Data Events Viber
          </div>
          <div className="card-body">
            <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
              <div className="dataTable-container">
                <table id="datatablesSimple" className="dataTable-table">
                  <thead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Nama Events</th>
                      <th scope="col">Gambar Events</th>
                      <th scope="col">Tanggal Events</th>
                      <th scope="col">Deskripsi Events</th>
                      <th scope="col">Penjelasan Events</th>
                      <th scope="col">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.dataKegiatan.map((kegiatan, nomor = 1) => (
                      <tr key={kegiatan.id}>
                        <td>{nomor + 1}</td>
                        <td>{kegiatan.eventNama}</td>
                        <td>{kegiatan.eventGambar}</td>
                        <td>{kegiatan.eventTanggal}</td>
                        <td>{kegiatan.eventDeskripsi}</td>
                        <td>{kegiatan.eventPenjelasan}</td>
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
                                          "/api/kegiatan/delete",
                                          {
                                            method: "POST",
                                            body: JSON.stringify(kegiatan),
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
export default AdminEvents;
