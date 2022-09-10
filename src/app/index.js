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
import Category from "./containers/Harish Agencies/category";
import Services from "./containers/Harish Agencies/service";
import HarishAddress from "./containers/Harish Agencies/hAddress";
import HarishReview from "./containers/Harish Agencies/hreview";
import HarishPayment from "./containers/Harish Agencies/hPayment";
import KitchenAddress from "./containers/Kitchen/kAddress";
import KitchenReview from "./containers/Kitchen/kReview";
import KitchenPayment from "./containers/Kitchen/kPayment";
import MahaAddress from "./containers/Maha Agencies/mAddress";
import MahaReview from "./containers/Maha Agencies/mReview";
import MahaPayment from "./containers/Maha Agencies/mPayment";
import LabsProfile from "./containers/Labs/lProfile";
import LabsReview from "./containers/Labs/lReview";
import LabsPayment from "./containers/Labs/lPayment";
import PharmacyProfile from "./containers/Pharmacy/pProfile";
import PharmacyReview from "./containers/Pharmacy/pReview";
import PharmacyPayment from "./containers/Pharmacy/pPayment";

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
        <Route path="/hacategory" element={<Category />} />
        <Route path="/haservice" element={<Services />} />
        <Route path="/harishaddress" element={<HarishAddress />} />
        <Route path="/harishreview" element={<HarishReview />} />
        <Route path="/harishpayment" element={<HarishPayment />} />
        <Route path="/kitchenaddress" element={<KitchenAddress />} />
        <Route path="/kitchenreview" element={<KitchenReview />} />
        <Route path="/kitchenpayment" element={<KitchenPayment />} />
        <Route path="/mahaaddress" element={<MahaAddress />} />
        <Route path="/mahareview" element={<MahaReview />} />
        <Route path="/mahapayment" element={<MahaPayment />} />
        <Route path="/labsprofile" element={<LabsProfile />} />
        <Route path="/labsreview" element={<LabsReview />} />
        <Route path="/labspayment" element={<LabsPayment />} />
        <Route path="/pharmacyprofile" element={<PharmacyProfile />} />
        <Route path="/pharmacyreview" element={<PharmacyReview />} />
        <Route path="/pharmacypayment" element={<PharmacyPayment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
