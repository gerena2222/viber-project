import prisma from "../../../client.ts";
export default async (req, res) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Request Di Tolak" });
  const { id } = JSON.parse(req.body);
  const hapus = await prisma.kegiatan.delete({
    where: {
      id: id,
    },
  });
  res.json(hapus);
};
