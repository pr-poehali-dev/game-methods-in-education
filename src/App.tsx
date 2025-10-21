
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Methods from "./pages/Methods";
import Games from "./pages/Games";
import Exercises from "./pages/Exercises";
import Materials from "./pages/Materials";
import Research from "./pages/Research";
import Diagnostics from "./pages/Diagnostics";
import Planning from "./pages/Planning";
import AgeGroups from "./pages/AgeGroups";
import CaseStudies from "./pages/CaseStudies";
import Parents from "./pages/Parents";
import Specialists from "./pages/Specialists";
import Tools from "./pages/Tools";
import FAQ from "./pages/FAQ";
import Contacts from "./pages/Contacts";
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
          <Route path="/methods" element={<Methods />} />
          <Route path="/games" element={<Games />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/research" element={<Research />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/age-groups" element={<AgeGroups />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/specialists" element={<Specialists />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;