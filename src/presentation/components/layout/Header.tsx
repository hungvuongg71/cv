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

        <div className="flex items-center gap-2">
          <a
            href="/cv/hungv_resume_2026.pdf"
            download="HungVuong-Resume.pdf"
            aria-label="Download PDF"
            className="
              hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-sans
              border border-brand-gray-border dark:border-brand-black-light
              bg-brand-gray-light dark:bg-brand-black-light
              text-brand-gray dark:text-gray-400
              hover:border-brand-orange hover:text-brand-orange
              transition-all duration-200
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </a>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </div>
    </header>
  )
}
