import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Pricing from "./pages/Pricing";
import Join from "./pages/Join";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FBFD] text-[#023047] transition-colors duration-300 dark:bg-[#023047] dark:text-white">
      <Navbar />
      <main>
        <Home />
        <About />
        <Programs />
        <Pricing />
        <Join />
      </main>
    </div>
  );
}
