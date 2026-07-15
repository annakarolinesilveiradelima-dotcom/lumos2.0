import {
  BarChart3,
  Bot,
  CalendarDays,
  Clapperboard,
  FileWarning,
  Lightbulb,
  Newspaper,
  PlaySquare,
  Search,
  Sparkles,
  TrendingUp,
  Users
} from "lucide-react";

const nav = [
  ["dashboard", BarChart3],
  ["summary", Sparkles],
  ["timeline", CalendarDays],
  ["news", Newspaper],
  ["trends", TrendingUp],
  ["reddit", Search],
  ["youtube", PlaySquare],
  ["x", Clapperboard],
  ["creators", Users],
  ["ai", Bot],
  ["risks", FileWarning],
  ["opportunities", Lightbulb]
] as const;

export function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-72 flex-col border-r border-white/10 bg-black/20 p-6 lg:flex">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[.45em] text-gold/70">
          Entertainment Intelligence
        </p>

        <h1 className="gold-text mt-3 text-4xl font-black">
          Lumos
        </h1>

        <p className="mt-2 text-sm text-parchment/60">
          Harry Potter Series Monitor
        </p>
      </div>

      <nav className="space-y-2">
        {nav.map(([id, Icon]) => {
          return (
            {`#${id}`}
              <Icon size={17} />
              <span>{id}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
`
