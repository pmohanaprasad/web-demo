import { Routes, Route, BrowserRouter } from "react-router-dom";
import Authentication from "./containers/Authentication";
import Dashboard from "./containers/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
