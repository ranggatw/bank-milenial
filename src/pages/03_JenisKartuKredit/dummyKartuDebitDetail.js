import kartuVisaGold from "../../assets/visaGold.png";
import kartuVisaPlatinum from "../../assets/visaPlatinum.png";
import kartuGPNGold from "../../assets/gpnGold.png";
import kartugpnPlatinum from "../../assets/gpnPlatinum.png";

export const kartuDebit = [
  {
    id: 1,
    title: "Visa Gold",
    imgKartu: kartuVisaGold,
    desc: [
      "Transaksi Online",
      "Transaksi di Luar Negeri",
      "Transaksi Dalam Negeri",
    ],
    biayaDanLimit: [
      { jenis: "Biaya Admin Bulanan", biaya: "Rp5.000" },
      { jenis: "Limit Tarik Tunai", biaya: "Rp10.000.000/hari" },
      {
        jenis: "Limit Transfer ke Sesama Milenial",
        biaya: "Rp50.000.000/hari",
      },
      { jenis: "Limit Transfer ke Bank Lain", biaya: "Rp10.000.000/hari" },
      { jenis: "Limit Setor Tunai", biaya: "Rp50.000.000/hari" },
      { jenis: "Limit Belanja & Pembayaran", biaya: "Visa/Visa Plus" },
    ],
    fitur: [
      { title: "Transaksi Online", jenis: "Visa/Visa Plus" },
      { title: "Tarik Tunai di Luar Negeri", jenis: "Visa/Visa Plus" },
      { title: "Belanja di Luar Negeri", jenis: "Visa/Visa Plus" },
      {
        title: "Transaksi ATM di Dalam Negeri",
        jenis: "Semua ATM",
      },
      { title: "Transaksi Lain di Dalam Negeri", jenis: "Semua EDC" },
    ],
  },
  {
    id: 2,
    title: "Visa Platinum",
    imgKartu: kartuVisaPlatinum,
    desc: [
      "Transaksi Online",
      "Transaksi di Luar Negeri",
      "Transaksi Dalam Negeri",
    ],
    biayaDanLimit: [
      { jenis: "Biaya Admin Bulanan", biaya: "Rp8.500" },
      { jenis: "Limit Tarik Tunai", biaya: "Rp10.000.000/hari" },
      {
        jenis: "Limit Transfer ke Sesama Milenial",
        biaya: "Rp100.000.000/hari",
      },
      { jenis: "Limit Transfer ke Bank Lain", biaya: "Rp25.000.000/hari" },
      { jenis: "Limit Setor Tunai", biaya: "Rp100.000.000/hari" },
      { jenis: "Limit Belanja & Pembayaran", biaya: "Rp100.000.000/hari" },
    ],
    fitur: [
      { title: "Transaksi Online", jenis: "Visa/Visa Plus" },
      { title: "Tarik Tunai di Luar Negeri", jenis: "Visa/Visa Plus" },
      { title: "Belanja di Luar Negeri", jenis: "Visa/Visa Plus" },
      {
        title: "Transaksi ATM di Dalam Negeri",
        jenis: "Semua ATM",
      },
      { title: "Transaksi Lain di Dalam Negeri", jenis: "Semua EDC" },
    ],
  },
  {
    id: 3,
    title: "GPN Gold",
    imgKartu: kartuGPNGold,
    desc: [
      "Transaksi Online",
      "Transaksi di Luar Negeri",
      "Transaksi Dalam Negeri",
    ],
    biayaDanLimit: [
      { jenis: "Biaya Admin Bulanan", biaya: "Rp5000" },
      { jenis: "Limit Tarik Tunai", biaya: "Rp10.000.000/hari" },
      {
        jenis: "Limit Transfer ke Sesama Milenial",
        biaya: "Rp50.000.000/hari",
      },
      { jenis: "Limit Transfer ke Bank Lain", biaya: "Rp10.000.000/hari " },
      { jenis: "Limit Setor Tunai", biaya: "Rp50.000.000/hari" },
      { jenis: "Limit Belanja & Pembayaran", biaya: "RpRp50.000.000/hari" },
    ],
    fitur: [
      {
        title: "Transaksi ATM di Dalam Negeri",
        jenis: "Semua ATM",
      },
      { title: "Transaksi Lain di Dalam Negeri", jenis: "Visa/Visa Plus" },
    ],
  },
  {
    id: 4,
    title: "GPN Platinum",
    imgKartu: kartugpnPlatinum,
    desc: [
      "Transaksi Online",
      "Transaksi di Luar Negeri",
      "Transaksi Dalam Negeri",
    ],
    biayaDanLimit: [
      { jenis: "Biaya Admin Bulanan", biaya: "Rp7.500" },
      { jenis: "Limit Tarik Tunai", biaya: "Rp10.000.000/hari" },
      {
        jenis: "Limit Transfer ke Sesama Milenial",
        biaya: "Rp100.000.000/hari",
      },
      { jenis: "Limit Transfer ke Bank Lain", biaya: "Rp25.000.000/hari" },
      { jenis: "Limit Setor Tunai", biaya: "Rp50.000.000/hari" },
      { jenis: "Limit Belanja & Pembayaran", biaya: "Rp100.000.000/hari" },
    ],
    fitur: [
      {
        title: "Transaksi ATM di Dalam Negeri",
        jenis: "Semua ATM",
      },
      { title: "Transaksi Lain di Dalam Negeri", jenis: "Visa/Visa Plus" },
    ],
  },
];
