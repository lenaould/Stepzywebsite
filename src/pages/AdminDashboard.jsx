import { getJoinRequests } from "../services/joinService";
import { Users, Calendar, CreditCard, UserCheck } from "lucide-react";

export default function AdminDashboard() {
  const requests = getJoinRequests();

  const stats = [
    { label: "Total Leads", value: requests.length, icon: Users },
    { label: "Sessions", value: 0, icon: Calendar },
    { label: "Payments", value: 0, icon: CreditCard },
    { label: "Members", value: 0, icon: UserCheck },
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-24 text-[#023047] dark:bg-[#023047] dark:text-white">
      <section className="mx-auto max-w-6xl">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-[#219EBC]">
          Admin
        </p>

        <h1 className="mt-3 text-4xl font-black">Admin Dashboard</h1>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-[2rem] border border-[#8ECAE6]/50 bg-white p-6 dark:border-[#219EBC]/20 dark:bg-[#0B3A57]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#219EBC]/15 text-[#219EBC]">
                  <Icon size={22} />
                </div>

                <h3 className="font-bold text-[#219EBC]">{stat.label}</h3>
                <p className="mt-2 text-4xl font-black">{stat.value}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 overflow-x-auto rounded-[2rem] border border-[#8ECAE6]/50 bg-white p-6 dark:border-[#219EBC]/20 dark:bg-[#0B3A57]">
          <h2 className="mb-4 text-2xl font-black">Join Requests</h2>

          <table className="w-full text-left">
            <thead>
              <tr className="text-[#219EBC]">
                <th className="py-3">Name</th>
                <th>Phone</th>
                <th>Level</th>
                <th>Days</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((request) => (
                <tr
                  key={request.id}
                  className="border-t border-[#8ECAE6]/40 dark:border-[#219EBC]/20"
                >
                  <td className="py-3">{request.name}</td>
                  <td>{request.phone}</td>
                  <td>{request.level}</td>
                  <td>{request.days?.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
