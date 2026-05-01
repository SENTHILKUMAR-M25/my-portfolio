import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Cell
} from "recharts";
import { Briefcase, MessageSquare, TrendingUp, Layers } from "lucide-react";

export default function Dashboard() {
  const [stats, setStats] = useState({ projects: 0, contacts: 0 });
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getLast6Months = () => {
    const months = [];
    const now = new Date();

    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      months.push({
        name: d.toLocaleString("default", { month: "short" }),
        monthIndex: d.getMonth(),
        year: d.getFullYear()
      });
    }

    return months;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projRes, contactRes] = await Promise.all([
          // axios.get("http://localhost:5000/api/projects"),
          // axios.get("http://localhost:5000/api/contact")
        axios.get("https://portfolio-036e.onrender.com/api/projects"),
        axios.get("https://portfolio-036e.onrender.com/api/contact")
        ]);

        const projects = projRes.data;
        const contacts = contactRes.data.data;

        setStats({
          projects: projects.length,
          contacts: contacts.length,
        });

        const months = getLast6Months();

        const formattedData = months.map((m) => ({
          name: m.name,
          uploads: projects.filter((p) => {
            const date = new Date(p.createdAt);
            return (
              date.getMonth() === m.monthIndex &&
              date.getFullYear() === m.year
            );
          }).length
        }));

        setChartData(formattedData);

      } catch (err) {
        console.error("Error loading dashboard data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const StatCard = ({ title, count, icon: Icon }) => (
    <div className="bg-zinc-900 border border-zinc-800 p-4 sm:p-5 md:p-6 rounded-2xl shadow-xl hover:border-red-600/40 transition-all group">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-zinc-500 text-[10px] sm:text-xs uppercase tracking-widest font-bold">
            {title}
          </p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-1 sm:mt-2 group-hover:text-red-500 transition-colors">
            {count}
          </h3>
        </div>
        <div className="p-2 sm:p-3 md:p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-red-600">
          <Icon size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 text-[10px] sm:text-xs text-zinc-400">
        <TrendingUp size={12} className="text-green-500" />
        <span>Live data</span>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="p-4 sm:p-6 text-white bg-zinc-950 min-h-screen">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-zinc-950 text-white">
      
      {/* Header */}
      <div className="mb-6 sm:mb-8 md:mb-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight">
          System <span className="text-red-600">Overview</span>
        </h1>
        <p className="text-zinc-500 text-xs sm:text-sm">
          Real-time performance metrics
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-10">
        <StatCard title="Total Projects" count={stats.projects} icon={Briefcase} />
        <StatCard title="Inbound Contacts" count={stats.contacts} icon={MessageSquare} />
      </div>

      {/* Chart */}
      <div className="bg-zinc-900 border border-zinc-800 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-2xl">
        
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 md:mb-8 gap-2">
          <h2 className="text-base sm:text-lg md:text-xl font-bold uppercase tracking-tight border-l-4 border-red-600 pl-3">
            Project Upload <span className="text-red-600">Velocity</span>
          </h2>
        </div>

        {/* Responsive Chart Height */}
        <div className="w-full h-[250px] sm:h-[300px] md:h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />

              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#71717a", fontSize: 10 }}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#71717a", fontSize: 10 }}
              />

              <Tooltip
                cursor={{ fill: "#18181b" }}
                contentStyle={{
                  backgroundColor: "#09090b",
                  borderRadius: "10px",
                  border: "1px solid #27272a",
                  fontSize: "12px"
                }}
              />

              <Bar dataKey="uploads" radius={[6, 6, 0, 0]} barSize={30}>
                {chartData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={index === chartData.length - 1 ? "#dc2626" : "#3f3f46"}
                  />
                ))}
              </Bar>

            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}