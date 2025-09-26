import "./App.css";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Insta from "./components/Insta";
import Productsgrid from "./components/Productsgrid";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Types from "./components/Types";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Category />
      <Types />
      <Services />
      <Productsgrid />
      <Banner />
      <Reviews />
      <Insta />
      <Footer />
    </>
  );
}

export default App;
