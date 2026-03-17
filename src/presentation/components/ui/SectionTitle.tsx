interface SectionTitleProps {
  children: React.ReactNode
  id?: string
}

export function SectionTitle({ children, id }: SectionTitleProps) {
  return (
    <div id={id} className="mb-8 scroll-mt-20">
      <h2 className="font-serif text-2xl sm:text-3xl font-normal text-brand-black dark:text-white tracking-tight">
        {children}
      </h2>
      <div className="mt-2 h-px w-12 bg-brand-orange" />
    </div>
  )
}
