import Home from "./pages/home/Home";
import Booking from "./pages/booking/Booking";
import Confirm from "./pages/confirm/Confirm";
import { Routes, Route } from "react-router-dom";
import "./global.scss";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/confirmation" element={<Confirm />} />
      </Routes>
    </>
  );
};

export default App;
