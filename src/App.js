import './App.css';
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import SearchResults from "./pages/SearchResults";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Sets from "./pages/Sets";
import QuizIntro from "./pages/QuizIntro";
import SkinQuiz from "./pages/SkinQuiz";
import HairQuiz from "./pages/HairQuiz";
import QuizResult from "./pages/QuizResult";
import Wholesale from "./pages/Wholesale";
import Courses from "./pages/Courses";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
     <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/sets" element={<Sets />} />
          <Route path="/quiz" element={<QuizIntro />} />
          <Route path="/quiz/skin" element={<SkinQuiz />} />
          <Route path="/quiz/hair" element={<HairQuiz />} />
          <Route path="/quiz/result" element={<QuizResult />} />
          <Route path="/wholesale" element={<Wholesale />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />


        </Routes>
        <ToastContainer position="top-right" autoClose={2000} hideProgressBar />

      </main>
        
    </Router>

    
  );
}

export default App;
