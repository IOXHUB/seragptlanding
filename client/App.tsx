import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import { PlaceholderPage } from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <LanguageProvider>
            <Layout>
              <Routes>
                {/* Root redirect to Turkish */}
                <Route path="/" element={<Index />} />

                {/* Language-prefixed routes */}
                <Route path="/:lang" element={<Index />} />
                <Route path="/:lang/blog" element={<PlaceholderPage pageKey="blog" />} />
                <Route path="/:lang/destek" element={<PlaceholderPage pageKey="support" />} />
                <Route path="/:lang/proje-danismanligi" element={<PlaceholderPage pageKey="consulting" />} />
                <Route path="/:lang/anahtar-teslim-sera" element={<PlaceholderPage pageKey="turnkey" />} />

                {/* Legacy routes without language prefix - redirect */}
                <Route path="/blog" element={<PlaceholderPage pageKey="blog" />} />
                <Route path="/destek" element={<PlaceholderPage pageKey="support" />} />
                <Route path="/proje-danismanligi" element={<PlaceholderPage pageKey="consulting" />} />
                <Route path="/anahtar-teslim-sera" element={<PlaceholderPage pageKey="turnkey" />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </LanguageProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
