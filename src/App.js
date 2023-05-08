import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
       <div className="App__body">
       Hello
       </div>
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
