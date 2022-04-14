import "./App.css";
import CommingSoon from "./pages/00_CommingSoon/CommingSoon";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommingSoon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
