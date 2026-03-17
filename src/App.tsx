import { Header } from '@presentation/components/layout/Header'
import { Footer } from '@presentation/components/layout/Footer'
import ResumePage from '@presentation/pages/ResumePage'

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-brand-black text-brand-black dark:text-white transition-colors duration-300">
      <Header />
      <ResumePage />
      <Footer />
    </div>
  )
}
