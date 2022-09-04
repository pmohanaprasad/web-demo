import { Routes, Route, BrowserRouter } from "react-router-dom";
import Authentication from "./containers/Authentication";
import Dashboard from "./containers/Dashboard";
import Visualize from "./containers/Visualize";
import Wish from "./containers/Wish";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/visualize" element={<Visualize />} />
        <Route path="/wish" element={<Wish />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
