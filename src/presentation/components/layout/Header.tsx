import { ThemeToggle } from '@presentation/components/ui/ThemeToggle'
import { useThemeStore } from '@presentation/store/useThemeStore'

export function Header() {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <header
      className="
      sticky top-0 z-50
      bg-white/90 dark:bg-brand-black/90
      backdrop-blur-sm
      border-b border-brand-gray-border dark:border-brand-black-light
    "
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <span className="font-serif text-base font-normal text-brand-orange tracking-wide">
          HV<span className="text-brand-black dark:text-white">.</span>
        </span>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-brand-gray dark:text-gray-400">
          {['Experience', 'Skills', 'Freelance', 'Education'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-brand-orange transition-colors duration-150"
            >
              {item}
            </a>
          ))}
        </nav>

        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </div>
    </header>
  )
}
