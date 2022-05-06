import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ButtonComp from "../../components/Button/ButtonComp";
import CheckComp from "../../components/Check/CheckComp";

function SyaratDanKetentuan2() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = (e) => {
    setIsChecked(!isChecked);
  };

  console.log(isChecked);

  const nextPage = () => {
    navigate("/jenis-kartu");
  };
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div
      className=""
      style={{
        // height: "calc(100vh - 137.5px)",
        minHeight: "calc(100vh - 137.5px)",
        paddingTop: "5rem",
      }}
    >
      <div className="container">
        <div className="row col-10 mx-auto">
          <div className="col-12 mb-3">
            <h3 className="text-center fw-bold">Syarat dan Ketentuan</h3>
          </div>
          <div className="col-12 mx-auto ">
            <div className="">
              <p style={{ textIndent: "3rem" }}>
                Mohon Syarat dan Ketentuan ini dibaca secara seksama sebelum
                Anda melanjutkan proses Pembukaan Rekening Tabungan Baru karena
                Anda akan terikat oleh Syarat dan Ketentuan ini setelah Anda
                menyelesaikan proses Pembukaan Rekening Tabungan Baru ini.
                Syarat dan Ketentuan ini merupakan satu kesatuan dan bagian yang
                tidak terpisahkan dari proses Pembukaan Rekening Tabungan Baru
                termasuk perubahannya di kemudian hari. Syarat dan Ketentuan ini
                berlaku pula untuk setiap pembukaan berikutnya dari
                produkTabungan yang sama yang dilakukan oleh Nasabah
              </p>
              <div style={{ maxHeight: "45vh", overflowY: "scroll" }}>
                <ol>
                  <li className="fw-bold lh-lg">Syarat-Syarat Umum</li>
                  <ol className="lh-lg" type="a">
                    <li>
                      Nasabah adalah perorangan yang telah berusia di atas 17
                      tahun dan mempunyai kartu identitas (KTP/Paspor/KITAS)
                      yang masih berlaku dan/atau yayasan (selanjutnya disebut
                      “Nasabah”).
                    </li>
                    <li>
                      Sebagai bukti kepemilikan TABUNGAN, Bank Milenial akan
                      menerbitkan buku TABUNGAN dan Kartu Tabungan.
                    </li>
                    <li>
                      Kartu Tabungan dapat digunakan oleh Nasabah untuk
                      melakukan cek saldo, penyetoran, penarikan, dan
                      pemindahbukuan melalui mesin EDC (Electronic Data
                      Capture).
                    </li>
                    <li>
                      Buku TABUNGAN, Kartu Tabungan, dan PIN (Personal
                      Identification Number) bersifat rahasia dan tidak untuk
                      diberikan kepada pihak selain Nasabah.
                    </li>
                    <li>
                      Dalam hal buku TABUNGAN dicuri atau hilang, Nasabah wajib
                      melaporkan secara tertulis dengan melampirkan surat
                      keterangan kehilangan dari kepolisian kepada kantor Bank
                      Milenial dimana rekening dibuka selama jam kerja dalam
                      bentuk dan isi yang dapat diterima oleh Bank Milenial.
                    </li>
                    <li>
                      Sebelum pemberitahuan tertulis diterima oleh Bank
                      Milenial, setiap transaksi yang dilakukan dengan buku
                      TABUNGAN yang hilang menjadi tanggung jawab Nasabah
                      sepenuhnya.
                    </li>
                    <li>
                      Nasabah bertanggung jawab sepenuhnya atas segala kerugian
                      yang timbul karena adanya pemalsuan buku TABUNGAN,
                      penyalahgunaan dalam bentuk apapun atas buku TABUNGAN,
                      kerugian atau tuntutan yang timbul karena kehilangan buku
                      TABUNGAN, kerusakan dan/atau kegagalan bekerjanya mesin
                      EDC di luar kekuasaan Bank Milenial.
                    </li>
                    <li>
                      Bank Milenial tidak melayani transaksi apapun terhadap
                      rekening TABUNGAN milik Nasabah yang dilaporkan hilang
                      oleh Nasabah kepada Bank Milenial. Untuk dapat kembali
                      melakukan transaksi atas rekening TABUNGAN tersebut,
                      Nasabah dapat mengajukan permohonan penggantian buku
                      TABUNGAN ke kantor Bank Milenial dimana rekening pertama
                      dibuka.
                    </li>
                    <li>
                      Bank Milenial berhak memblokir/menutup rekening tanpa
                      pemberitahuan terlebih dahulu apabila saldo Nasabah nihil
                      dalam buku TABUNGAN atau tidak aktif sesuai dengan
                      ketentuan yang berlaku di Bank Milenial atau apabila
                      dipandang perlu karena data-data yang diserahkan ke Bank
                      Milenial ternyata terbukti tidak benar atau ada
                      dugaan/indikasi rekening disalahgunakan untuk tujuan
                      penipuan/tindak pidana.
                    </li>
                    <li>
                      Apabila terdapat perbedaan antara saldo yang tertera pada
                      buku TABUNGAN dengan saldo yang tercatat pada pembukuan
                      Bank Milenial, maka yang akan digunakan sebagai pedoman
                      adalah saldo yang tercatat pada pembukuan Bank Milenial,
                      kecuali dapat dibuktikan sebaliknya.
                    </li>
                    <li>
                      Nasabah wajib menanggung biaya-biaya yang timbul
                      sehubungan dengan penerbitan dan atau penggunaan Kartu
                      Tabungan, antara lain tetapi tidak terbatas pada biaya
                      pembuatan/penggantian Kartu Tabungan dan buku TABUNGAN,
                      biaya administrasi, biaya transaksi, dan biaya lainnya.
                    </li>
                    <li>
                      Besarnya biaya-biaya dimaksud pada poin k di atas berikut
                      perubahannya akan diberitahukan kepada Nasabah dalam
                      bentuk dan melalui sarana apapun. Biaya-biaya tersebut
                      langsung didebet oleh Bank Milenial dari rekening TABUNGAN
                      Nasabah yang bersangkutan.
                    </li>
                    <li>
                      Nasabah wajib memberitahukan secara tertulis kepada Bank
                      Milenial apabila terdapat perubahan data-data dan tanda
                      tangan Nasabah. Bank Milenial tidak bertanggung jawab atas
                      akibat dari kelalaian Nasabah dalam memperbaharui data
                      Nasabah pada Bank Milenial.
                    </li>
                    <li>
                      Apabila Nasabah meninggal dunia, Bank Milenial berhak
                      meminta dokumen-dokumen keahliwarisan yang disyaratkan
                      oleh Bank Milenial agar Bank Milenial dapat mencairkan
                      saldo rekening TABUNGAN kepada ahli waris yang ditentukan
                      dalam dokumen keahliwarisan. Dengan pencairan saldo
                      rekening TABUNGAN milik Nasabah yang telah meninggal dunia
                      kepada ahli waris atau kuasanya yang mendapat hak sesuai
                      dengan dokumen keahliwarisan, maka Bank Milenial
                      dibebaskan dari seluruh tanggung jawab berkaitan dengan
                      rekening TABUNGAN milik Nasabah.
                    </li>
                    <li>
                      Apabila di kemudian hari Nasabah mengajukan fasilitas
                      Kartu ATM, maka Nasabah secara otomatis menyetujui
                      syarat-syarat dan ketentuan-ketentuan Kartu ATM.
                    </li>
                    <li>
                      Selama Nasabah masih memiliki hutang kepada Bank Milenial
                      berdasarkan pinjaman uang, bunga, provisi, materai, atau
                      biaya-biaya yang timbul berdasarkan apapun juga, Bank
                      Milenial berhak dan sepanjang perlu dengan ini diberi
                      kuasa oleh Nasabah untuk mendebet rekening Nasabah dan
                      menggunakannya untuk pembayaran kembali atas setiap jumlah
                      uang yang setiap waktu terutang kepada Bank Milenial.
                      Segala akibat yang timbul dari pendebetan rekening
                      TABUNGAN tersebut menjadi tanggung jawab Nasabah
                      sepenuhnya.
                    </li>
                    <li>
                      Bank Milenial berhak melakukan koreksi atas saldo Nasabah
                      jika terjadi kesalahan posting yang dilakukan oleh Bank
                      Milenial. Nasabah melepaskan Bank Milenial dari segala
                      tuntutan atau gugatan atas perbaikan kesalahan tersebut.
                    </li>
                    <li>
                      Nasabah harus mencetak transaksi yang telah dilakukan pada
                      buku TABUNGAN.
                    </li>
                    <li>
                      Buku TABUNGAN tidak diperbolehkan untuk dititipkan ataupun
                      disimpan pada Bank Milenial termasuk pegawainya. Segala
                      resiko yang terjadi atas penitipan buku TABUNGAN menjadi
                      tanggung jawab Nasabah.
                    </li>
                    <li>
                      Dalam hal buku TABUNGAN rusak/cacat, maka Nasabah dapat
                      mengajukan permohonan penggantian kepada kantor Bank
                      Milenial tempat membuka rekening TABUNGAN dengan
                      menyerahkan buku TABUNGAN yang rusak/cacat tersebut.
                    </li>
                    <li>
                      Penerbitan buku TABUNGAN tidak dikenakan biaya, sedangkan
                      penggantian buku TABUNGAN yang hilang/rusak/cacat karena
                      kesalahan Nasabah dikenakan biaya sesuai dengan ketentuan
                      Bank Milenial.
                    </li>
                    <li>
                      Penutupan rekening TABUNGAN dikenakan biaya penutupan.
                      Besarnya biaya penutupan rekening TABUNGAN maupun
                      perubahannya akan diberitahukan oleh Bank Milenial kepada
                      Nasabah dalam bentuk dan melalui sarana apapun.
                    </li>
                    <li>
                      Rekening TABUNGAN yang ditutup dalam masa periode undian
                      tidak akan diikutsertakan dalam setiap undian yang
                      diadakan oleh Bank Milenial.
                    </li>
                    <li>
                      Pada saat penutupan rekening, buku TABUNGAN harus
                      diserahkan kembali kepada Bank Milenial sehingga menjadi
                      tidak berlaku lagi.
                    </li>
                    <li>
                      Dengan membuka rekening TABUNGAN, maka Nasabah tunduk dan
                      menyetujui ketentuan-ketentuan ini, termasuk setiap
                      perubahannya yang akan diberitahukan terlebih dahulu oleh
                      Bank Milenial dalam bentuk dan melalui sarana apapun.
                    </li>
                    <li>
                      Simpanan dalam TABUNGAN dijamin oleh Lembaga Penjamin
                      Simpanan (LPS) sesuai ketentuan perundang-undangan yang
                      berlaku.
                    </li>
                  </ol>
                  <li className="fw-bold lh-lg">
                    Penyetoran dan Penarikan Dana
                  </li>
                  <ol className="lh-lg" type="a">
                    <li>
                      Setoran pertama dan setoran selanjutnya dapat
                      diberitahukan oleh Bank Milenial dalam bentuk dan melalui
                      sarana apapun.
                    </li>
                    <li>
                      Penyetoran dapat dilakukan bebas setiap saat dengan atau
                      tanpa disertai buku TABUNGAN selama kas buka pada waktu
                      jam kerja kantor Bank Milenial atau dapat juga dilakukan
                      melalui petugas tabungan melalui sistem EDC.
                    </li>
                    <li>
                      Nasabah wajib melengkapi Formulir Setoran/Transfer
                      (F-TAB-05) atau Formulir Penarikan (F-TAB-07) untuk setiap
                      transaksi penyetoran atau penarikan tanpa melalui sistem
                      EDC.
                    </li>
                    <li>
                      Setoran dengan Cek atau Bilyet Giro atau transaksi kiriman
                      uang masuk akan dikreditkan ke dalam rekening TABUNGAN
                      setelah dana efektif diterima oleh Bank Milenial.
                    </li>
                    <li>
                      Kecuali produk TABUNGAN MAPAN, TABUNGAN MAPAN XTRA,
                      TABUNGAN PLUS XTRA, dan TABUNGAN SUPER, penarikan dana
                      atau pemindahbukuan dana dapat dilakukan bebas setiap saat
                      dengan menggunakan buku TABUNGAN asli selama kas buka pada
                      waktu jam kerja kantor Bank Milenial atau dapat juga
                      dilakukan melalui petugas tabungan melalui sistem EDC.
                    </li>
                    <li>
                      Produk TABUNGAN MAPAN, TABUNGAN MAPAN XTRA, TABUNGAN PLUS
                      XTRA , dan TABUNGAN SUPER adalah produk simpanan
                      berjangka, sehingga penarikan dana atau pemindahbukuan
                      dana hanya dapat dilakukan setelah jangka waktu simpanan
                      berakhir.
                    </li>
                    <li>
                      Penarikan atau pemindahbukuan dana yang dilakukan bukan
                      oleh Nasabah sendiri hanya dapat dilakukan di kantor Bank
                      Milenial tempat membuka rekening TABUNGAN dan harus
                      dilengkapi dengan surat kuasa bermaterai cukup dari
                      Nasabah serta kartu identitas asli milik Nasabah dan
                      Penerima Kuasa.
                    </li>
                    <li>
                      Apabila tanda tangan pada Formulir Penarikan berbeda
                      dengan tanda tangan pada buku TABUNGAN/identitas
                      asli/pembukuan Bank Milenial, maka Bank Milenial berhak
                      untuk menolak transaksi. Jika Nasabah tidak dapat
                      menyerahkan kartu identitas aslinya, Bank Milenial berhak
                      untuk menahan buku TABUNGAN untuk dilakukan pemeriksaan
                      lebih lanjut sampai dapat dipastikan kebenaran penarikan
                      yang dilakukan ataupun menolak transaksi Nasabah tersebut
                      sampai dapat ditunjukannya kartu identitas asli dari
                      Nasabah.
                    </li>
                    <li>
                      Bank Milenial berhak meminta kartu identitas asli dari
                      Nasabah untuk penarikan tunai.
                    </li>
                    <li>
                      Nasabah wajib memberikan informasi sumber dana dan tujuan
                      transaksi untuk setiap transaksi lebih dari Rp.100 juta,
                      baik secara sekaligus maupun bertahap dalam 1 hari.
                    </li>
                  </ol>
                  <li className="fw-bold lh-lg">
                    Perhitungan dan Pembayaran Bunga
                  </li>
                  <ol className="lh-lg" type="a">
                    <li>
                      Rekening TABUNGAN akan diberikan bunga yang dihitung
                      harian (khusus TABUNGAN PLUS, TABUNGAN PLUS XTRA, TABUNGAN
                      PLUS MAXI, dan TABUNGAN SUPER) atau yang dihitung
                      berdasarkan saldo akhir bulan (khusus TABUNGAN MAPAN dan
                      TABUNGAN MAPAN XTRA) atau yang dihitung berdasarkan saldo
                      terendah bulanan (jenis TABUNGAN lainnya).
                    </li>
                    <li>
                      Pemberian bunga akan dilakukan pada akhir bulan dari bulan
                      yang bersangkutan dan langsung dikreditkan atau
                      ditambahkan pada saldo Nasabah yang tercatat pada
                      pembukuan Bank Milenial.
                    </li>
                    <li>
                      Besarnya suku bunga ditentukan oleh Bank Milenial, dan
                      apabila terjadi perubahan suku bunga, maka perubahan
                      tersebut dapat diberlakukan tanpa pemberitahuan terlebih
                      dahulu kepada Nasabah.
                    </li>
                    <li>
                      Setiap pendapatan bunga akan dikenakan pajak penghasilan
                      (PPh) sesuai ketentuan perpajakan yang berlaku dan akan
                      dibebankan kepada Nasabah.
                    </li>
                  </ol>
                  <li className="fw-bold lh-lg">Penanganan Keluhan</li>
                  <ol className="lh-lg" type="a">
                    <li>
                      Dalam hal Nasabah akan menyampaikan keluhan kepada Bank
                      Milenial sehubungan dengan rekening TABUNGAN, dapat
                      dilakukan secara tertulis kepada kantor pusat Bank
                      Milenial atau melalui surel di cs@bprindra.com dengan
                      dilampiri dengan fotokopi identitas diri Nasabah dan
                      dokumen pendukung lainnya.
                    </li>
                    <li>
                      Bank Milenial akan menanggapi keluhan tersebut sesuai
                      dengan kebijakan dan prosedur yang berlaku di Bank
                      Milenial, selambat-lambatnya 7 hari kerja sejak
                      diterimanya keluhan tersebut.
                    </li>
                    <li>
                      Keluhan Nasabah yang disampaikan kepada Bank Milenial
                      setelah 3 (tiga) bulan atau lebih sejak tanggal transaksi,
                      tidak akan dilayani oleh Bank Milenial.
                    </li>
                  </ol>
                  <li className="fw-bold lh-lg">Force Majeure</li>
                  <ol className="lh-lg" type="a">
                    <li>
                      Bank Milenial tidak bertanggung jawab atas kelalaian
                      pelaksanaan kewajiban dalam hal terjadi peristiwa Force
                      Majeure. Pelaksanaan kewajiban tersebut ditunda selama
                      berlangsung peristiwa Force Majeure tersebut.
                    </li>
                    <li>
                      Nasabah dengan ini menjamin dan membebaskan Bank Milenial
                      dari segala kewajiban, tuntutan, gugatan, dan klaim apapun
                      dari pihak manapun juga, termasuk dari Nasabah sendiri,
                      dalam hal Bank Milenial tidak dapat melaksanakan perintah
                      dari Nasabah karena sebab-sebab yang diakibatkan oleh
                      peristiwa Force Majeure.
                    </li>
                  </ol>
                  <li className="fw-bold lh-lg">Hukum yang Berlaku</li>
                  <ol className="lh-lg" type="a">
                    <li>
                      Setiap transaksi perbankan yang dilakukan Nasabah akan
                      diproses berdasarkan hukum yang berlaku di Negara Republik
                      Indonesia.
                    </li>
                    <li>
                      Syarat dan Ketentuan ini serta pelaksanaannya dan
                      penafsirannya dalam segala hal diatur oleh serta diartikan
                      dan ditafsirkan dengan hukum Negara Republik Indonesia.
                    </li>
                    <li>
                      Nasabah dan Bank Milenial memilih domisili tetap dan
                      permanen di Panitera Pengadilan Negeri Singaraja.
                    </li>
                  </ol>
                </ol>
                <div className="text-center">
                  <CheckComp
                    lable={"Anda menyetujui Syarat dan Ketentuan yang berlaku"}
                    onChange={handleCheckbox}
                    checked={isChecked}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            {isChecked == true ? (
              <ButtonComp
                title={"Setuju"}
                onClick={nextPage}
                className={"btn btn-primary"}
                disabled={!isChecked}
              />
            ) : (
              ""
            )}
            {isChecked == false ? (
              <ButtonComp
                title={"Tidak Setuju"}
                onClick={goBack}
                className={"btn btn-primary"}
                disabled={false}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SyaratDanKetentuan2;
