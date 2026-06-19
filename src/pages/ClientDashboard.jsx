import { useAuth } from "../context/AuthContext";
import { Calendar, Target, Trophy, Bell, Clock, BookOpen } from "lucide-react";

export default function ClientDashboard() {
  const { user } = useAuth();

  const cards = [
    {
      title: "Next Session",
      value: "Saturday • 16:00",
      icon: Calendar,
    },
    {
      title: "Current Goal",
      value: "Improve Speaking",
      icon: Target,
    },
    {
      title: "Attendance",
      value: "0 Sessions",
      icon: Trophy,
    },
    {
      title: "Announcements",
      value: "No updates",
      icon: Bell,
    },
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-24 text-[#023047] dark:bg-[#023047] dark:text-white">
      <section className="mx-auto max-w-6xl">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-[#219EBC]">
          Dashboard
        </p>

        <h1 className="mt-3 text-4xl font-black">
          Hello {user?.name || "Member"} 👋
        </h1>

        <p className="mt-3 text-lg text-slate-600 dark:text-[#8ECAE6]">
          Welcome back to Stepzy. Keep showing up and your English will improve
          step by step.
        </p>

        {/* Stats */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="
                  rounded-[2rem]
                  border
                  border-[#8ECAE6]/50
                  bg-white
                  p-6
                  transition
                  hover:-translate-y-1
                  dark:border-[#219EBC]/20
                  dark:bg-[#0B3A57]
                "
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#219EBC]/15 text-[#219EBC]">
                  <Icon size={24} />
                </div>

                <h3 className="font-bold text-[#219EBC]">{card.title}</h3>

                <p className="mt-3 text-xl font-black">{card.value}</p>
              </div>
            );
          })}
        </div>

        {/* Upcoming Session */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-[2rem] border border-[#8ECAE6]/50 bg-white p-8 dark:border-[#219EBC]/20 dark:bg-[#0B3A57]">
            <h2 className="text-2xl font-black">Upcoming Session</h2>

            <div className="mt-6 flex items-center gap-4">
              <div className="rounded-2xl bg-[#219EBC]/15 p-4 text-[#219EBC]">
                <Clock size={28} />
              </div>

              <div>
                <p className="font-bold">Speaking Club</p>

                <p className="text-slate-500 dark:text-[#8ECAE6]">
                  Saturday • 16:00 • Stepzy Local
                </p>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="rounded-[2rem] border border-[#8ECAE6]/50 bg-white p-8 dark:border-[#219EBC]/20 dark:bg-[#0B3A57]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#219EBC]/15 text-[#219EBC]">
              <BookOpen size={24} />
            </div>

            <h2 className="text-2xl font-black">Progress</h2>

            <p className="mt-4 text-slate-500 dark:text-[#8ECAE6]">Beginner</p>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-[#8ECAE6]/20">
              <div className="h-full w-[25%] rounded-full bg-[#219EBC]" />
            </div>

            <p className="mt-3 text-sm font-bold text-[#219EBC]">
              25% Completed
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
