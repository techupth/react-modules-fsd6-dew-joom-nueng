import "./App.css";
import { Header } from "../component/Header";
import { Footer } from "../component/Footer";
import { FAQ } from "../component/FAQ";
import { ProductSection } from "../component/ProductSection";
import { MainContent } from "../component/MainContent";







function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </div>
    
  );
}

export default App;
