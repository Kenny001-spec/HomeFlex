import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Marketplace from "./components/Marketplace/Marketplace";
import Blog from "./components/Content/blogs/pages/Blog";
import Footer from "./components/Footer/Footer";
import MarketplaceForm from "./components/MarketplaceForm/MarketplaceForm";
import ConfirmPurchase from "./components/Marketplace/ConfirmPayment";
import { TransactionProvider } from "./contest/TransactionContext";
import PropertyStatusProvider from "./context/PropertyStatusContext";
import BuyPropertyProvider from "./context/BuyPropertyStatusContext";
import FAQs from "./components/Faqs/Faqs";
import Contact from "./components/Contact/Contact";

function App() {
  const [completedPurchases, setCompletedPurchases] = useState([]);

  const handleConfirmPayment = (propertyId) => {
    setCompletedPurchases([...completedPurchases, propertyId]);
  };

  return (
    <PropertyStatusProvider>
      <BuyPropertyProvider>
        <TransactionProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/marketplace" element={<Marketplace completedPurchases={completedPurchases} />} />
              <Route path="/footer" element={<Footer />} />
              <Route path="/marketplace-form" element={<MarketplaceForm />} />
              <Route
                path="/confirm/:propertyId"
                element={<ConfirmPurchase onConfirmPayment={handleConfirmPayment} />}
              />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </TransactionProvider>
      </BuyPropertyProvider>
    </PropertyStatusProvider>
  );
}

export default App;
