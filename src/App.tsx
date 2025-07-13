import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom"; // ✅ updated here
import { NavigationProvider } from "./contexts/NavigationContext";
import BackgroundMusicPlayer from "./components/BackgroundMusicPlayer";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Globe from "./pages/Globe";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter> {/* ✅ changed from BrowserRouter to HashRouter */}
        <NavigationProvider>
          <BackgroundMusicPlayer />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/globe" element={<Globe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </NavigationProvider>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
