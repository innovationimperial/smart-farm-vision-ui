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
import HealthRecords from "./pages/livestock/HealthRecords";
import VaccinationSchedule from "./pages/livestock/VaccinationSchedule";
import TreatmentRecords from "./pages/livestock/TreatmentRecords";
import VeterinaryVisits from "./pages/livestock/VeterinaryVisits";
import BreedingRecords from "./pages/livestock/BreedingRecords";
import FeedInventory from "./pages/livestock/FeedInventory";
import DailyFeeding from "./pages/livestock/DailyFeeding";
import GrazingManagement from "./pages/livestock/GrazingManagement";
import NutritionalAnalysis from "./pages/livestock/NutritionalAnalysis";
import MilkProduction from "./pages/livestock/MilkProduction";
import EggProduction from "./pages/livestock/EggProduction";
import MeatProduction from "./pages/livestock/MeatProduction";
import PurchaseRecords from "./pages/livestock/PurchaseRecords";
import SalesRecords from "./pages/livestock/SalesRecords";
import OperatingExpenses from "./pages/livestock/OperatingExpenses";
import ProfitabilityAnalysis from "./pages/livestock/ProfitabilityAnalysis";
import HousingRecords from "./pages/livestock/HousingRecords";
import EquipmentInventory from "./pages/livestock/EquipmentInventory";
import RegulatoryCompliance from "./pages/livestock/RegulatoryCompliance";
import RecordKeeping from "./pages/livestock/RecordKeeping";
import Weather from "./pages/Weather";
import AIAssistant from "./pages/AIAssistant";
import Finance from "./pages/Finance";
import ChartOfAccounts from "./pages/finance/ChartOfAccounts";
import ExpenseManagement from "./pages/finance/ExpenseManagement";

// Aquaculture imports
import Aquaculture from "./pages/Aquaculture";
import WaterBodyRegistration from "./pages/aquaculture/WaterBodyRegistration";
import WaterQualityManagement from "./pages/aquaculture/WaterQualityManagement";
import SystemInfrastructure from "./pages/aquaculture/SystemInfrastructure";
import AquacultureFeedInventory from "./pages/aquaculture/FeedInventory";
import AquacultureDailyFeeding from "./pages/aquaculture/DailyFeeding";
import FeedConversionAnalysis from "./pages/aquaculture/FeedConversionAnalysis";

// Equipment imports
import Equipment from "./pages/Equipment";
import EquipmentRegistration from "./pages/equipment/EquipmentRegistration";
import ConditionAssessment from "./pages/equipment/ConditionAssessment";
import EquipmentSpecifications from "./pages/equipment/EquipmentSpecifications";

// Equipment Dashboard imports
import EquipmentStatus from "./pages/equipment/dashboard/EquipmentStatus";
import MaintenanceDashboard from "./pages/equipment/dashboard/MaintenanceDashboard";
import FinancialPerformance from "./pages/equipment/dashboard/FinancialPerformance";
import UtilizationAnalytics from "./pages/equipment/dashboard/UtilizationAnalytics";

// Equipment Management imports
import MaintenanceSchedule from "./pages/equipment/MaintenanceSchedule";

// Inventory imports
import Inventory from "./pages/Inventory";
import SeedInventory from "./pages/inventory/SeedInventory";
import ChemicalInventory from "./pages/inventory/ChemicalInventory";

// Marketing imports
import Marketing from "./pages/Marketing";
import CustomerManagement from "./pages/marketing/CustomerManagement";
import ProductCatalog from "./pages/marketing/ProductCatalog";
import SalesChannels from "./pages/marketing/SalesChannels";

import NotFound from "./pages/NotFound";
import HumanResources from "./pages/HumanResources";
import EmployeeManagement from "./pages/hr/EmployeeManagement";
import PayrollManagement from "./pages/hr/PayrollManagement";
import TimeAttendance from "./pages/hr/TimeAttendance";
import TrainingDevelopment from "./pages/hr/TrainingDevelopment";

// Compliance imports
import Compliance from "./pages/Compliance";
import RegulatoryStandards from "./pages/compliance/RegulatoryStandards";
import AuditManagement from "./pages/compliance/AuditManagement";
import Documentation from "./pages/compliance/Documentation";
import TrainingRecords from "./pages/compliance/TrainingRecords";
import InspectionReports from "./pages/compliance/InspectionReports";
import NonComplianceTracking from "./pages/compliance/NonComplianceTracking";

// Sustainability imports
import Sustainability from "./pages/Sustainability";
import CarbonFootprint from "./pages/sustainability/CarbonFootprint";

// Analytics imports
import Analytics from "./pages/Analytics";
import ProductionAnalytics from "./pages/analytics/ProductionAnalytics";

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
          <Route path="/livestock/health-records" element={<HealthRecords />} />
          <Route path="/livestock/vaccination" element={<VaccinationSchedule />} />
          <Route path="/livestock/treatment" element={<TreatmentRecords />} />
          <Route path="/livestock/veterinary" element={<VeterinaryVisits />} />
          <Route path="/livestock/breeding" element={<BreedingRecords />} />
          <Route path="/livestock/feed-inventory" element={<FeedInventory />} />
          <Route path="/livestock/feeding" element={<DailyFeeding />} />
          <Route path="/livestock/grazing" element={<GrazingManagement />} />
          <Route path="/livestock/nutrition-analysis" element={<NutritionalAnalysis />} />
          <Route path="/livestock/milk-production" element={<MilkProduction />} />
          <Route path="/livestock/egg-production" element={<EggProduction />} />
          <Route path="/livestock/meat-production" element={<MeatProduction />} />
          <Route path="/livestock/purchase" element={<PurchaseRecords />} />
          <Route path="/livestock/sales" element={<SalesRecords />} />
          <Route path="/livestock/expenses" element={<OperatingExpenses />} />
          <Route path="/livestock/profitability" element={<ProfitabilityAnalysis />} />
          <Route path="/livestock/housing" element={<HousingRecords />} />
          <Route path="/livestock/equipment" element={<EquipmentInventory />} />
          <Route path="/livestock/compliance" element={<RegulatoryCompliance />} />
          <Route path="/livestock/record-keeping" element={<RecordKeeping />} />
          
          {/* Aquaculture Routes */}
          <Route path="/aquaculture" element={<Aquaculture />} />
          <Route path="/aquaculture/water-body" element={<WaterBodyRegistration />} />
          <Route path="/aquaculture/water-quality" element={<WaterQualityManagement />} />
          <Route path="/aquaculture/infrastructure" element={<SystemInfrastructure />} />
          <Route path="/aquaculture/feed-inventory" element={<AquacultureFeedInventory />} />
          <Route path="/aquaculture/feeding" element={<AquacultureDailyFeeding />} />
          <Route path="/aquaculture/feed-conversion" element={<FeedConversionAnalysis />} />
          
          {/* Equipment Routes */}
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/equipment/registration" element={<EquipmentRegistration />} />
          <Route path="/equipment/condition" element={<ConditionAssessment />} />
          <Route path="/equipment/specifications" element={<EquipmentSpecifications />} />
          
          {/* Equipment Dashboard Routes */}
          <Route path="/equipment/dashboard/status" element={<EquipmentStatus />} />
          <Route path="/equipment/dashboard/maintenance" element={<MaintenanceDashboard />} />
          <Route path="/equipment/dashboard/financial" element={<FinancialPerformance />} />
          <Route path="/equipment/dashboard/utilization" element={<UtilizationAnalytics />} />
          
          {/* Equipment Management Routes */}
          <Route path="/equipment/maintenance/schedule" element={<MaintenanceSchedule />} />
          
          {/* Inventory Routes */}
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/seeds" element={<SeedInventory />} />
          <Route path="/inventory/chemicals" element={<ChemicalInventory />} />
          
          {/* Finance Routes */}
          <Route path="/finance" element={<Finance />} />
          <Route path="/finance/chart-of-accounts" element={<ChartOfAccounts />} />
          <Route path="/finance/expenses" element={<ExpenseManagement />} />
          
          {/* Marketing Routes */}
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/marketing/customers" element={<CustomerManagement />} />
          <Route path="/marketing/products" element={<ProductCatalog />} />
          <Route path="/marketing/channels" element={<SalesChannels />} />
          
          {/* Weather Routes */}
          <Route path="/weather" element={<Weather />} />
          
          {/* AI Assistant Routes */}
          <Route path="/ai-assistant" element={<AIAssistant />} />
          
          {/* Human Resources Routes */}
          <Route path="/hr" element={<HumanResources />} />
          <Route path="/hr/employees" element={<EmployeeManagement />} />
          <Route path="/hr/payroll" element={<PayrollManagement />} />
          <Route path="/hr/time-attendance" element={<TimeAttendance />} />
          <Route path="/hr/training" element={<TrainingDevelopment />} />
          
          {/* Compliance Routes */}
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/compliance/standards" element={<RegulatoryStandards />} />
          <Route path="/compliance/audits" element={<AuditManagement />} />
          <Route path="/compliance/documentation" element={<Documentation />} />
          <Route path="/compliance/training" element={<TrainingRecords />} />
          <Route path="/compliance/inspections" element={<InspectionReports />} />
          <Route path="/compliance/non-compliance" element={<NonComplianceTracking />} />
          
          {/* Sustainability Routes */}
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/sustainability/carbon-footprint" element={<CarbonFootprint />} />
          
          {/* Analytics Routes */}
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/analytics/production" element={<ProductionAnalytics />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
