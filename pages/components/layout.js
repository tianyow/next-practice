import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
      </div>

      <main className="container mx-auto">{children}</main>

      <div className="container mx-auto">
        <Footer />
      </div>
    </>
  )
}