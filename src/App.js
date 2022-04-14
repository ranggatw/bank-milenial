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
import AmbilKTP from "./pages/07_AmbilKTP/AmbilKTP";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CommingSoon />}>
          <Route path="/comming-soon" element={<CommingSoon />} />
        </Route>
        <Route element={<Container />}>
          <Route path="/register/*" element={<Outlet />}>
            <Route path="ktp" element={<AmbilKTP />} />
            <Route path="otp" element={<VerifikasiOtp />} />
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
