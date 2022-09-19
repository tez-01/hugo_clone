import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/home/header/Header";
import HomePage from "./components/pagecontent/Homepage";
import Footer from "./components/home/footer/Footer";
import News from "./components/news/News";
import Docs from "./components/docs/Docs";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="news" element={<News />} />
          <Route path="docs" element={<Docs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
