import prisma from "../../../client.ts";
export default async (req, res) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Request Di Tolak" });
  const mitra = JSON.parse(req.body);
  const create = await prisma.mitra.create({
    data: {
      mitraNama: mitra.mitraNama,
      mitraEmail: mitra.mitraEmail,
      mitraNoktp: mitra.mitraNoktp,
      mitraNohp: mitra.mitraNohp,
      mitraAlamat: mitra.mitraAlamat,
      mitraPaket: mitra.mitraPaket,
      mitraKota: mitra.mitraKota,
    },
  });
  res.json(create);
};
