import "./App.scss";
import ForYou from "./Pages/ProductsRoutes/ForYou";
import HomeFav from "./Pages/ProductsRoutes/HomeFav";
import FashionFinds from "./Pages/ProductsRoutes/FashionFinds";
import Wearables from "./Pages/ProductsRoutes/Wearables";
import Grocery from "./Pages/ProductsRoutes/Grocery";
import Signup from "./Pages/auth/Signup";
import Login from "./Pages/auth/Login";
import Footer from "./Components/common/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ForYou />} />
        <Route path="/homefavorite" element={<HomeFav />} />
        <Route path="/fashionfinds" element={<FashionFinds />} />
        <Route path="/wearables" element={<Wearables />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/signin" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
