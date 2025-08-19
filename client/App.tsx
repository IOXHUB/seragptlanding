import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import { PlaceholderPage } from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route
              path="/blog"
              element={
                <PlaceholderPage
                  title="Blog"
                  description="Sera teknolojileri, tarımsal verimlilik ve yapay zeka hakkında güncel yazılar ve rehberler."
                />
              }
            />
            <Route
              path="/destek"
              element={
                <PlaceholderPage
                  title="Destek"
                  description="Teknik destek, sık sorulan sorular ve yardım merkezi."
                />
              }
            />
            <Route
              path="/proje-danismanligi"
              element={
                <PlaceholderPage
                  title="Proje Danışmanlığı"
                  description="Sera projeleriniz için profesyonel danışmanlık ve planlama hizmetleri."
                />
              }
            />
            <Route
              path="/anahtar-teslim-sera"
              element={
                <PlaceholderPage
                  title="Anahtar Teslim Sera Hizmetleri"
                  description="Komple sera kurulum, donanım ve yazılım çözümleri."
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
