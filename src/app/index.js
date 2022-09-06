import { Routes, Route, BrowserRouter } from "react-router-dom";
import HarishAgencies from "./containers/Harish Agencies";
import Authentication from "./containers/Authentication";
import Dashboard from "./containers/Dashboard";
import Labs from "./containers/Labs";
import Wish from "./containers/Wish";
import Kitchen from "./containers/Kitchen";
import MahaAgencies from "./containers/Maha Agencies";
import Pharmacy from "./containers/Pharmacy";
import Payment from "./containers/Payment";
import Review from "./containers/Review";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wish" element={<Wish />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/harishagencies" element={<HarishAgencies />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/mahaagencies" element={<MahaAgencies />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
