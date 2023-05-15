import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Slideshow from "./components/Slideshow/Slideshow";
import ChildrenDetails from "./components/ChildrenDetails/ChildrenDetails";
import ChildDetailsPage from "./pages/ChildDetailsPage/ChildDetailsPage";
import EditChild from "./components/EditChild/EditChild";
import RegisterNewChild from "./pages/RegisterNewChild/RegisterNewChild";
import DaycarePage from "./pages/DaycarePage/DaycarePage";
import DaycareDetailsPage from "./pages/DaycareDetailsPage/DaycareDetailsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="App__body">
          <Routes>
            <Route path="/" element={<Slideshow />} />
            <Route path="/daycares" element={<DaycarePage />} />
            <Route path="/:id" element={<DaycareDetailsPage />} />
            <Route path="/children" element={<ChildrenDetails />} />
            <Route path="/children/:id" element={<ChildDetailsPage />} />
            <Route path="/children/register" element={<RegisterNewChild />} />
            <Route path="/children/:id/edit" element={<EditChild />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
