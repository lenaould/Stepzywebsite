import { useState } from "react";
import { Moon, Sun, Languages, Menu, X } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { dark, setDark, lang, setLang } = useApp();

  const nav =
    lang === "fr"
      ? ["Accueil", "À propos", "Programmes", "Tarifs", "Rejoindre"]
      : ["Home", "About", "Programs", "Pricing", "Join"];

  const ids = ["home", "about", "programs", "pricing", "join"];

  const toggleDark = () => {
    console.log("Before:", dark);
    setDark((prev) => !prev);
  };
  return (
    <header className="sticky top-0 z-50 border-b border-[#8ECAE6]/40 bg-white/90 px-5 py-4 backdrop-blur-xl dark:border-[#219EBC]/20 dark:bg-[#023047]/90">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        <a
          href="#home"
          className="text-2xl font-black tracking-tight text-[#023047] dark:text-white"
        >
          Step<span className="text-[#219EBC]">zy</span>
        </a>

        <div className="hidden rounded-full border border-[#8ECAE6]/50 bg-[#8ECAE6]/10 p-1 md:flex dark:border-[#219EBC]/20 dark:bg-white/5">
          {nav.map((item, index) => (
            <a
              key={item}
              href={`#${ids[index]}`}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                ids[index] === "join"
                  ? "bg-[#FB8500] text-white hover:bg-[#FFB703]"
                  : "text-[#023047] hover:bg-[#219EBC] hover:text-white dark:text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 rounded-full border border-[#8ECAE6]/50 bg-white px-4 py-2 text-sm font-bold text-[#023047] dark:border-[#219EBC]/25 dark:bg-white/10 dark:text-white"
            >
              <Languages size={17} /> {lang.toUpperCase()}
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-3 w-36 rounded-2xl border border-[#8ECAE6]/50 bg-white p-2 shadow-xl dark:border-[#219EBC]/25 dark:bg-[#0B3A57]">
                {["en", "fr"].map((code) => (
                  <button
                    key={code}
                    onClick={() => {
                      setLang(code);
                      setMenuOpen(false);
                    }}
                    className="block w-full rounded-xl px-4 py-2 text-start font-semibold hover:bg-[#219EBC]/15 dark:text-white"
                  >
                    {code === "en" ? "English" : "Français"}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={toggleDark}
            className="rounded-full border border-[#8ECAE6]/50 bg-white p-3 text-[#023047] transition hover:scale-105 dark:border-[#FFB703]/40 dark:bg-white/10 dark:text-[#FFB703]"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-full border border-[#8ECAE6]/50 bg-white p-3 text-[#023047] md:hidden dark:border-[#219EBC]/25 dark:bg-white/10 dark:text-white"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mx-auto mt-4 flex max-w-6xl flex-col gap-2 rounded-3xl border border-[#8ECAE6]/50 bg-white p-4 md:hidden dark:border-[#219EBC]/20 dark:bg-[#0B3A57]">
          {nav.map((item, index) => (
            <a
              key={item}
              href={`#${ids[index]}`}
              onClick={() => setMobileOpen(false)}
              className={`rounded-2xl px-5 py-3 font-bold transition ${
                ids[index] === "join"
                  ? "bg-[#FB8500] text-white"
                  : "text-[#023047] hover:bg-[#219EBC] hover:text-white dark:text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
