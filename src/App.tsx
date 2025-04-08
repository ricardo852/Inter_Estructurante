
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import QueEs from "./pages/QueEs";
import Prevencion from "./pages/Prevencion";
import Ayuda from "./pages/Ayuda";
import EvitarSerAgresor from "./pages/EvitarSerAgresor";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Chatbot from "./pages/Chatbot";
import Games from "./pages/Games";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/que-es" element={<QueEs />} />
          <Route path="/prevencion" element={<Prevencion />} />
          <Route path="/ayuda" element={<Ayuda />} />
          <Route path="/evitar-ser-agresor" element={<EvitarSerAgresor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/games" element={<Games />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
