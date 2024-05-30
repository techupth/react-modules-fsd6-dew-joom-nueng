import "./App.css";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { ProductSection } from "./components/ProductSection";
import { FAQ } from "./components/Faq";
import { Footer } from "./components/Footer";
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <div>
      <ChakraProvider>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
