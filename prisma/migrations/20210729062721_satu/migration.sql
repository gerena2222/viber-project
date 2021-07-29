-- CreateTable
CREATE TABLE "Produk" (
    "id" SERIAL NOT NULL,
    "produkNama" TEXT NOT NULL,
    "produkGambar" TEXT NOT NULL,
    "produkDeskripsi" TEXT NOT NULL,
    "produkManfaat" TEXT,
    "produkKhasiat" TEXT,
    "produkTanggal" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kegiatan" (
    "id" SERIAL NOT NULL,
    "eventNama" TEXT NOT NULL,
    "eventGambar" TEXT NOT NULL,
    "eventDeskripsi" TEXT NOT NULL,
    "eventPenjelasan" TEXT,
    "eventTanggal" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" SERIAL NOT NULL,
    "blogNama" TEXT NOT NULL,
    "blogVideo" TEXT NOT NULL,
    "blogDeskripsi" TEXT NOT NULL,
    "blogPenjelasan" TEXT,
    "blogTanggal" TEXT,
    "blogGambar" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mitra" (
    "id" SERIAL NOT NULL,
    "mitraNama" TEXT NOT NULL,
    "mitraEmail" TEXT,
    "mitraNoktp" INTEGER,
    "mitraNohp" INTEGER,
    "mitraAlamat" TEXT,
    "mitraKota" TEXT,
    "mitraPaket" TEXT,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Mitra.mitraEmail_unique" ON "Mitra"("mitraEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Mitra.mitraNoktp_unique" ON "Mitra"("mitraNoktp");

-- CreateIndex
CREATE UNIQUE INDEX "Mitra.mitraNohp_unique" ON "Mitra"("mitraNohp");
