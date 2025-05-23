
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FarmProfile from "./pages/FarmProfile";
import CropManagement from "./pages/CropManagement";
import CropDataEntry from "./pages/CropDataEntry";
import CropCalendar from "./pages/CropCalendar";
import FieldManagement from "./pages/FieldManagement";
import CropAnalytics from "./pages/CropAnalytics";
import Livestock from "./pages/Livestock";
import AnimalRegistration from "./pages/livestock/AnimalRegistration";
import LineageInformation from "./pages/livestock/LineageInformation";
import AcquisitionDetails from "./pages/livestock/AcquisitionDetails";
import AnimalMovement from "./pages/livestock/AnimalMovement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/farm-profile" element={<FarmProfile />} />
          <Route path="/crops" element={<CropManagement />} />
          <Route path="/crops/data-entry" element={<CropDataEntry />} />
          <Route path="/crops/calendar" element={<CropCalendar />} />
          <Route path="/crops/fields" element={<FieldManagement />} />
          <Route path="/crops/analytics" element={<CropAnalytics />} />
          <Route path="/livestock" element={<Livestock />} />
          <Route path="/livestock/animal-registration" element={<AnimalRegistration />} />
          <Route path="/livestock/lineage" element={<LineageInformation />} />
          <Route path="/livestock/acquisition" element={<AcquisitionDetails />} />
          <Route path="/livestock/movement" element={<AnimalMovement />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
