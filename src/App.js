import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Slideshow from "./components/Slideshow/Slideshow";
import ChildrenDetails from './components/ChildrenDetails/ChildrenDetails';
import ChildDetailsPage from './pages/ChildDetailsPage/ChildDetailsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
       <div className="App__body">
       <Routes>
          <Route path="/" element={<Slideshow />} />
          {/* <Route path="/:id" element={<WarehouseItemPage />} /> */}
          <Route path="/children" element={<ChildrenDetails />} />
          <Route path="/children/:id" element={<ChildDetailsPage />} />
          
        </Routes>
        
    
       
       </div>
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
