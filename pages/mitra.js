import MainLayout from "../component/main-layout";
import Heroku from "../component/heroku-all";
import { useForm } from "react-hook-form";
import Image from "next/image";

const AddData = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form onSubmit={handleSubmit(props.onSubmit)} className="form">
      <div className="row">
        <div className="col-md-7">
          <label htmlFor="inputMitra" className="form-label">
            Nama Lengkap
          </label>
          <input
            {...register("mitraNama", { required: true })}
            type="text"
            className="form-control"
            placeholder="Masukan Nama"
          />
        </div>
        <div className="col-md-5">
          <label htmlFor="inputMitra" className="form-label">
            Paket Usaha
          </label>
          <select {...register("mitraPaket")} className="form-select">
            <option>--Pilih Paket--</option>
            <option value="Resseler">Paket Reseller</option>
            <option value="Murah">Paket Murah</option>
            <option value="Sedang">Paket Sedang</option>
            <option value="Mahal">Paket Mahal</option>
          </select>
        </div>
        <div className="col-md-7">
          <label htmlFor="inputMitra" className="form-label">
            No induk Kependudukan
          </label>
          <input
            {...register("mitraNoktp", { required: true })}
            type="number"
            className="form-control"
            placeholder="Masukkan Angka"
          />
        </div>
        <div className="col-md-5">
          <label htmlFor="inputMitra" className="form-label">
            Kabupaten/Kota*
          </label>
          <input
            {...register("mitraKota", { required: true })}
            type="text"
            className="form-control"
            placeholder="Masukan Kota"
          />
        </div>
        <div className="col-md-7">
          <label htmlFor="inputMitra" className="form-label">
            Email
          </label>
          <input
            {...register("mitraEmail", { required: true })}
            type="text"
            className="form-control"
            placeholder="Masukan Email"
          />
        </div>
        <div className="col-md-5">
          <label htmlFor="inputMitra" className="form-label">
            No Handphone/WhatsApp
          </label>
          <input
            {...register("mitraNohp", { required: false })}
            type="text"
            className="form-control"
            placeholder="Masukan Angka"
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="inputMitra" className="form-label">
            Alamat
          </label>
          <textarea
            {...register("mitraAlamat", { required: false })}
            type="text"
            className="form-control"
          />
        </div>

        <div className="col-md-12 mt-3 mb-3">
          <button
            type="submit"
            style={{ width: "100%" }}
            className="btn btn-primary"
          >
            Masukkan Data
          </button>
        </div>
      </div>
    </form>
  );
};
const Mitra = () => {
  return (
    <MainLayout title="Kemitraan">
      <Heroku title="Mitra" />
      <section className="pricing4 py-5 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h3 className="mb-3">Bundle Paket Mitra</h3>
              <h6 className="subtitle font-weight-normal">
                You can relay on our amazing features list and also our customer
                services will be great experience for you without doubt
              </h6>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-3">
              <div className="card card-shadow border-0 mb-4">
                <Image
                  className="card-img-top"
                  src="https://placeimg.com/200/150/tech"
                  alt="wrappixel kit"
                />
                <div className="p-3">
                  <h5 className="font-weight-medium mb-0">
                    Paket Mitra Reseller
                  </h5>
                  <ul className="list-inline font-14 mt-3">
                    <li className="py-1">
                      <i className="fas fa-check text-success"></i>
                      <span>500 cup /month</span>
                    </li>
                    <li className="py-1">
                      <i className="fas fa-check text-success"></i>
                      <span>Harga Sangat Murah</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card card-shadow border-0 mb-4">
                <Image
                  className="card-img-top"
                  src="https://placeimg.com/200/150/tech"
                  alt="wrappixel kit"
                />
                <div className="p-3">
                  <h5 className="font-weight-medium mb-0">
                    Paket Mitra Reseller
                  </h5>
                  <ul className="list-inline font-14 mt-3">
                    <li className="py-1">
                      <i className="fas fa-check text-success"></i>
                      <span>500 cup /month</span>
                    </li>
                    <li className="py-1">
                      <i className="fas fa-check text-success"></i>
                      <span>Harga Sangat Murah</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-shadow border-0 mb-4">
                <Image
                  className="card-img-top"
                  src="https://placeimg.com/200/150/tech"
                  alt="wrappixel kit"
                />
                <div className="p-3">
                  <h5 className="font-weight-medium mb-0">
                    Paket Mitra Reseller
                  </h5>
                  <ul className="list-inline font-14 mt-3">
                    <li className="py-1">
                      <i className="fas fa-check text-success"></i>
                      <span>500 cup /month</span>
                    </li>
                    <li className="py-1">
                      <i className="fas fa-check text-success"></i>
                      <span>Harga Sangat Murah</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-shadow border-0 mb-4">
                <Image
                  className="card-img-top"
                  src="https://placeimg.com/200/150/tech"
                  alt="wrappixel kit"
                />
                <div className="p-3">
                  <h5 className="font-weight-medium mb-0">
                    Paket Mitra Reseller
                  </h5>
                  <ul className="list-inline font-14 mt-3">
                    <li className="py-1">
                      <i className="fas fa-check text-success"></i>
                      <span>500 cup /month</span>
                    </li>
                    <li className="py-1">
                      <i className="fas fa-check text-success"></i>
                      <span>Harga Sangat Murah</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <a
              className="btn btn-primary card-load mt-2"
              data-bs-toggle="modal"
              data-bs-target="#view-modal"
            >
              Klik Disini Jika Berminat
            </a>
          </div>
        </div>
      </section>

      <div
        className="modal fade"
        id="view-modal"
        tabIndex="-1"
        aria-labelledby="view-modal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="view-modal">
                Formulir Mitra
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <AddData
                onSubmit={async (data, e) => {
                  const mitra = {
                    mitraNama: data.mitraNama,
                    mitraEmail: data.mitraEmail,
                    mitraNoktp: data.mitraNoktp,
                    mitraNohp: data.mitraNohp,
                    mitraAlamat: data.mitraAlamat,
                    mitraPaket: data.mitraPaket,
                    mitraKota: data.mitraKota,
                  };
                  try {
                    const res = await fetch("/api/mitra/create", {
                      method: "POST",
                      body: JSON.stringify(mitra),
                    });
                    console.log("gagal");
                    if (!res.ok) throw new Error(res.statusText);
                    let status = await res.json();
                    if (status !== null) {
                      location.reload();
                      alert("Data Berhasil Masuk");
                      // setDataProduk([...dataProduk, produk]);
                    }
                  } catch (error) {
                    console.log(error);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default Mitra;
