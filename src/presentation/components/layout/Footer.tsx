export function Footer() {
  return (
    <footer className="border-t border-brand-gray-border dark:border-brand-black-light py-8 mt-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="font-serif text-sm text-brand-gray dark:text-gray-500">
          © {new Date().getFullYear()} Hung Vuong
        </span>
      </div>
    </footer>
  )
}
