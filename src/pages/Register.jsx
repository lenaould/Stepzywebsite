import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { UserPlus } from "lucide-react";

export default function Register() {
  return (
    <main className="min-h-screen bg-white px-6 py-24 text-[#023047] dark:bg-[#023047] dark:text-white">
      <section className="mx-auto flex max-w-6xl items-center justify-center">
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md rounded-[2rem] border border-[#8ECAE6]/50 bg-white p-8 shadow-xl dark:border-[#219EBC]/20 dark:bg-[#0B3A57]"
        >
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#219EBC]">
            Welcome to Stepzy
          </p>

          <h1 className="mt-3 text-4xl font-black">Create Account</h1>

          <p className="mt-3 text-sm text-slate-500 dark:text-[#8ECAE6]">
            Create your account and start your English journey.
          </p>

          <input className="stepzy-input mt-6" placeholder="Full Name" />

          <input
            className="stepzy-input"
            type="email"
            placeholder="Email Address"
          />

          <input
            className="stepzy-input"
            type="password"
            placeholder="Password"
          />

          <input
            className="stepzy-input"
            type="password"
            placeholder="Confirm Password"
          />

          <button
            type="submit"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FB8500] px-6 py-4 font-black text-white shadow-xl shadow-[#FB8500]/20 transition hover:scale-[1.02] hover:bg-[#FFB703]"
          >
            Create Account
            <UserPlus size={18} />
          </button>

          <p className="mt-5 text-center text-slate-500 dark:text-[#8ECAE6]">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold text-[#219EBC] transition hover:text-[#FB8500]"
            >
              Login
            </Link>
          </p>
        </motion.form>
      </section>
    </main>
  );
}
