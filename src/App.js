// imports
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import "./App.css";
// components
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
// pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import PostPage from "./pages/postPage/PostPage";

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="container" id="container">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/posts/:id" element={<PostPage />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
