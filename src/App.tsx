import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Layouts
import GroupLayout from "./layouts/GroupLayout";
import EstateLayout from "./layouts/EstateLayout";
import NgoLayout from "./layouts/NgoLayout";

// Group Pages
import GroupHome from "./pages/group/GroupHome";
import AboutGroup from "./pages/group/AboutGroup";

// Estate Pages
import EstateHome from "./pages/estate/EstateHome";
import AboutEstate from "./pages/estate/AboutEstate";
import Projects from "./pages/estate/Projects";
import ContactEstate from "./pages/estate/ContactEstate";

// NGO Pages
import NgoHome from "./pages/ngo/NgoHome";
import AboutNgo from "./pages/ngo/AboutNgo";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ToastContainer position="top-right" autoClose={5000} />
      <BrowserRouter>
        <Routes>
          {/* Group Routes */}
          <Route path="/" element={<GroupLayout />}>
            <Route index element={<GroupHome />} />
            <Route path="about" element={<AboutGroup />} />
          </Route>

          {/* Estate Routes */}
          <Route path="/estate" element={<EstateLayout />}>
            <Route index element={<EstateHome />} />
            <Route path="about" element={<AboutEstate />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<ContactEstate />} />
          </Route>

          {/* NGO Routes */}
          <Route path="/ngo" element={<NgoLayout />}>
            <Route index element={<NgoHome />} />
            <Route path="about" element={<AboutNgo />} />
            <Route path="programs" element={<div>Programs (Coming Soon)</div>} />
            <Route path="donate" element={<div>Donate (Coming Soon)</div>} />
            <Route path="news" element={<div>News (Coming Soon)</div>} />
            <Route path="contact" element={<div>Contact NGO (Coming Soon)</div>} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
