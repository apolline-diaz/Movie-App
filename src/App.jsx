import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Swiper from "./pages/Swiper";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Movie-App/" element={<Home />} />
        <Route path="/swiper" element={<Swiper />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
