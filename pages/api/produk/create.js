import prisma from "../../../client.ts";
export default async (req, res) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Request Di Tolak" });
  const produk = JSON.parse(req.body);
  const create = await prisma.produk.create({
    data: {
      produkNama: produk.produkNama,
      produkGambar: produk.produkGambar,
      produkDeskripsi: produk.produkDeskripsi,
      produkManfaat: produk.produkManfaat,
      produkKhasiat: produk.produkKhasiat,
      produkTanggal: produk.produkTanggal,
    },
  });
  res.json(create);
};
