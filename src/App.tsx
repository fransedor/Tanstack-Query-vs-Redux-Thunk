import { Route, Routes } from "react-router-dom";
import QueryFetch from "./pages/query-fetch";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NormalFetch from "./pages/normal-fetch";
import Navbar from "./Navbar";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<NormalFetch />} />
        <Route path="/query-fetch" element={<QueryFetch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
