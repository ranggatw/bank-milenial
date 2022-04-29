import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import CommingSoon from "./pages/00_CommingSoon/CommingSoon";
import VerifikasiOtp from "./pages/08_VerfikasiNoHP/VerifikasiOtp";
import Container from "./container/Container";
import UploadKTP from "./pages/07_UploadKTP/UploadKTP";
import InstruksiVerifikasiKTP from "./pages/06_VerifikasiKTP/InstruksiVerifikasiKTP";
import DataDiriPage from "./pages/10_DataDiri/DataDiriPage";
import TandaTanganDigital from "./pages/11_TTD/TandaTanganDigital";
import DevPage from "./pages/00_CommingSoon/DevPage";
import KantorCabang from "./pages/05_KantorCabang/KantorCabang";
import InstruksiVideo from "./pages/09_VerifikasiVideo/InstruksiVideo";
import SyaratDanKetentuan from "./pages/09_VerifikasiVideo/SyaratDanKetentuan";
import UploadVideo from "./pages/09_VerifikasiVideo/UploadVideo";
import WellcomePage from "./pages/01_WellcomePage/WellcomePage";
import PembukaanRekeningBaru from "./pages/02_PembukaanRekeningBaru/PembukaanRekeningBaru";
import JenisKartuKredit from "./pages/03_JenisKartuKredit/JenisKartuKredit";
import DetailKartuKredit from "./pages/04_DetailKartuKredit/DetailKartuKredit";
import VerifikasiTTD from "./pages/11_TTD/VerifikasiTTD";
import Konfirmasi from "./pages/12_Konfirmasi/Konfirmasi";
import FinisihPage from "./pages/13_FinishPage/FinisihPage";
import SyaratDanKetentuan2 from "./pages/SyaratDanKetentuan/SyaratDanKetentuan2";
import DetailKartuDebit from "./pages/04_DetailKartuKredit/DetailKartuDebit";
import PendidikanTerakhir from "./pages/PendidikanTerakhir/PendidikanTerakhir";
import InformasiPekerjaan from "./pages/InformasiPekerjaan/InformasiPekerjaan";
import TujuanPembukaanRek from "./pages/TujuanPembukaanRek/TujuanPembukaanRek";
import VerifikasiOtp2 from "./pages/08_VerfikasiNoHP/VerifikasiOtp2";
import UploadFotoBersama from "./pages/UploadFotoBersama/UploadFotoBersama";
import UploadFotoBersamaInst from "./pages/UploadFotoBersama/UploadFotoBersamaInst";
import CreatePassword from "./pages/Password/CreatePassword";
import PinPassword from "./pages/Password/PinPassword";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<CommingSoon />}> */}
        {/* <Route path="/comming-soon" element={<CommingSoon />} /> */}
        <Route path="/dev" element={<DevPage />} />
        <Route element={<Container />}>
          <Route path="/" element={<Outlet />}>
            <Route path="/" element={<WellcomePage />} />
            <Route path="rekening-baru" element={<PembukaanRekeningBaru />} />
            <Route
              path="syarat-dan-ketentuan"
              element={<SyaratDanKetentuan2 />}
            />
            <Route path="jenis-kartu" element={<JenisKartuKredit />}></Route>
            <Route path="jenis-kartu/:id" element={<DetailKartuDebit />} />
            {/* <Route path="detail-kartu" element={<DetailKartuKredit />} /> */}
            <Route path="ktp/instruksi" element={<InstruksiVerifikasiKTP />} />
            <Route path="ktp/upload" element={<UploadKTP />} />
            <Route path="ktp/data-diri" element={<DataDiriPage />} />
            <Route path="otp" element={<VerifikasiOtp />} />
            <Route
              path="tujuan-pembukaan-rekening"
              element={<TujuanPembukaanRek />}
            />
            <Route path="pendidikan" element={<PendidikanTerakhir />} />
            <Route
              path="informasi-pekerjaan"
              element={<InformasiPekerjaan />}
            />
            <Route path="otp-2" element={<VerifikasiOtp2 />} />
            <Route path="video-instruski" element={<InstruksiVideo />} />
            <Route
              path="video-syarat-ketentuan"
              element={<SyaratDanKetentuan />}
            />
            <Route path="video-upload" element={<UploadVideo />} />
            <Route
              path="foto-ktp-instruksi"
              element={<UploadFotoBersamaInst />}
            />
            <Route path="foto-ktp" element={<UploadFotoBersama />} />
            <Route path="create-password" element={<CreatePassword />} />
            <Route path="create-pin" element={<PinPassword />} />
            <Route path="kantor-cabang" element={<KantorCabang />} />
            <Route path="ttd" element={<TandaTanganDigital />} />
            <Route path="ttd/otp" element={<VerifikasiTTD />} />
            <Route path="konfirmasi-akhir" element={<Konfirmasi />} />
            <Route path="finish" element={<FinisihPage />} />
          </Route>
        </Route>

        {/* <Route
          path="/register"
          element={<Navigate replace to="/comming-soon" />}
        /> */}
        {/* <Route path="/comming-soon" element={<CommingSoon />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
