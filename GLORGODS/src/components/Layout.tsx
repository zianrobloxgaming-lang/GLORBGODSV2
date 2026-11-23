import { Outlet, useNavigate, useLocation } from "react-router"

export function Layout() {
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { name: "Home", icon: "🏠", path: "/" },
    { name: "Problem", icon: "❗", path: "/problem" },
    { name: "Target", icon: "🎯", path: "/target" },
    { name: "About", icon: "✨", path: "/about" },
  ]

  return (
    <div className="flex h-10 bg-background text-foreground font-sans">
      {/* Left Sidebar */}
      <aside className="w-20 flex-shrink-0 bg-primary flex flex-col items-center py-6 border-r border-border">
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path

            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center justify-center gap-1 w-16 h-16 rounded-xl transition-colors cursor-pointer ${
                  isActive
                    ? "bg-white/70 text-white"
                    : "text-primary-foreground/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider">
                  {item.name}
                </span>
              </button>
            )
          })}
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-10 border-b border bg-card flex items-center px-8 flex-shrink-0 bg-white-600/100">
          <h1 className="text-xl font-bold tracking-tight">Group 4 website</h1>
        </header>

        {/* Page Content */}

        <main className="flex-1 overflow-auto p-5">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
{
  /* NOTE: so uhh im to lazy to remove some of stray codes here [yeah most of them dosent even apply to the website] PLS IGNORE AT ALL COSTS) */
}
