import prisma from "../../../client.ts";
export default async (req, res) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Request Di Tolak" });
  const kegiatan = JSON.parse(req.body);
  const masuk = await prisma.kegiatan.create({
    data: {
      eventNama: kegiatan.eventNama,
      eventGambar: kegiatan.eventGambar,
      eventTanggal: kegiatan.eventTanggal,
      eventDeskripsi: kegiatan.eventDeskripsi,
      eventPenjelasan: kegiatan.eventPenjelasan,
    },
  });
  res.json(masuk);
};
