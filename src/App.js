import { Route, Routes, useLocation } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { AnimatePresence } from "framer-motion";

// import components
import About from "./screens/home/About";
import Leadership from "./screens/leadership/Leadership";
import Navbar from "./components/Navbar/Navbar";
import Vita from "./screens/vita/Vita";
import Events from "./screens/events/Events";
import IBDWorkshop from "./screens/workshops/ibd/IBDWorkshop";
import Footer from "./components/Footer/Footer";
import Join from "./screens/join/Join";

export default function App() {
  const location = useLocation();

  return (
    <ChakraProvider theme={theme}>
      <Navbar activeTab={location.pathname.split("/")[1]} />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          {/* Routes */}
          <Route index path="/" element={<About />} />
          <Route path="leadership" element={<Leadership />} />
          <Route path="vita" element={<Vita />} />
          <Route path="events" element={<Events />} />
          <Route path="ibd" element={<IBDWorkshop />} />
          <Route path="join" element={<Join />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </ChakraProvider>
  );
}
