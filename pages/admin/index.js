import AdminCard from "./component/admin-card";
import AdminLayout from "./component/admin-layout";
// import prisma from "../../client.ts";
// export async function getServerSideProps(contex) {
//   const dataMitra = await prisma.mitra.findMany();
//   return {
//     props: { dataMitra },
//   };
// }
const Dashboard = (props) => {
  return (
    <AdminLayout>
      <AdminCard />
      <div className="container-fluid px-4">
        <h1 className="mt-4">Dashboard</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item ">
            <a>Dashboard</a>
          </li>
          <li className="breadcrumb-item active">Daftar Mitra</li>
        </ol>
        <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-table me-1"></i>
            Data Mitra Viber
          </div>
          <div className="card-body">
            <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
              <div className="dataTable-container">
                <table id="datatablesSimple" className="dataTable-table">
                  <thead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Nama</th>
                      <th scope="col">No KTP</th>
                      <th scope="col">Alamat</th>
                      <th scope="col">No Handphone</th>
                      <th scope="col">Email</th>
                      <th scope="col">Paket Usaha</th>
                      <th scope="col">Kota</th>
                      <th scope="col">Aksi</th>
                    </tr>
                  </thead>
                  {/* <tbody>
                    {props.dataMitra.map((mitra, nomor = 1) => (
                      <tr key={mitra.id}>
                        <td>{nomor + 1}</td>
                        <td>{mitra.mitraNama}</td>
                        <td>{mitra.mitraNoktp}</td>
                        <td>{mitra.mitraAlamat}</td>
                        <td>{mitra.mitraNohp}</td>
                        <td>{mitra.mitraEmail}</td>
                        <td>{mitra.mitraPaket}</td>
                        <td>{mitra.mitraKota}</td>
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
                                          "/api/mitra/delete",
                                          {
                                            method: "POST",
                                            body: JSON.stringify(mitra),
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
                  </tbody> */}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
export default Dashboard;
