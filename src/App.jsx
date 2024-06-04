import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/Movie-App/' element={<Home />} />
        <Route path='/movie/:id' element={<MoviePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
