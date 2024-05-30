import "./App.css";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { ProductSection } from "./components/ProductSection";
import { Footer } from "./components/Footer";
import { FAQ } from "./components/FAQ";
import Button from "./components/common/Button";
import * as React from 'react'

// 1. import `ChakraProvider` component
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
