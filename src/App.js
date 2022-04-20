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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CommingSoon />}>
          <Route path="/comming-soon" element={<CommingSoon />} />
        </Route>
        <Route path="/dev" element={<DevPage />} />
        <Route element={<Container />}>
          <Route path="/register/*" element={<Outlet />}>
            <Route path="ktp/instruksi" element={<InstruksiVerifikasiKTP />} />
            <Route path="ktp/upload" element={<UploadKTP />} />
            <Route path="ktp/data-diri" element={<DataDiriPage />} />
            <Route path="otp" element={<VerifikasiOtp />} />
            <Route path="ttd" element={<TandaTanganDigital />} />
            <Route path="kantor-cabang" element={<KantorCabang />} />
            <Route path="video-instruski" element={<InstruksiVideo />} />
            <Route
              path="video-syarat-ketentuan"
              element={<SyaratDanKetentuan />}
            />
            <Route path="video-upload" element={<UploadVideo />} />
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
