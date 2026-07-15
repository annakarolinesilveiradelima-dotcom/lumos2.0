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

function NavItem({ href, label, icon: Icon }: { href: string; label: string; icon: React.ElementType }) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm capitalize text-parchment/75 transition hover:bg-white/10 hover:text-gold"
    >
      <Icon size={17} />
      <span>{label}</span>
    </a>
  );
}

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
        <NavItem href="#dashboard" label="dashboard" icon={BarChart3} />
        <NavItem href="#summary" label="summary" icon={Sparkles} />
        <NavItem href="#timeline" label="timeline" icon={CalendarDays} />
        <NavItem href="#news" label="news" icon={Newspaper} />
        <NavItem href="#trends" label="trends" icon={TrendingUp} />
        <NavItem href="#reddit" label="reddit" icon={Search} />
        <NavItem href="#youtube" label="youtube" icon={PlaySquare} />
        <NavItem href="#x" label="x" icon={Clapperboard} />
        <NavItem href="#creators" label="creators" icon={Users} />
        <NavItem href="#ai" label="ai" icon={Bot} />
        <NavItem href="#risks" label="risks" icon={FileWarning} />
        <NavItem href="#opportunities" label="opportunities" icon={Lightbulb} />
      </nav>
    </aside>
  );
}
