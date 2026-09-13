import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import TechnologiesSection from './components/Technologies/TechnologiesSection'
import Footer from './components/Footer/Footer'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
})

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Single ToastContainer at application level */}
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main id="main-content" className="flex-1">
          <Hero />
          <TechnologiesSection />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  )
}
