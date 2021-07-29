import prisma from "../../../client.ts";
export default async (req, res) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Request Di Tolak" });
  const blog = JSON.parse(req.body);
  const create = await prisma.blog.create({
    data: {
      blogNama: blog.blogNama,
      blogGambar: blog.blogGambar,
      blogTanggal: blog.blogTanggal,
      blogDeskripsi: blog.blogDeskripsi,
      blogPenjelasan: blog.blogPenjelasan,
      blogVideo: blog.blogVideo,
    },
  });
  res.json(create);
};
