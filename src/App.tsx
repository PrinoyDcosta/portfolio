import Footer from "./components/common/footer"
import MainBody from "./components/common/main-body"
import Navbar from "./components/common/navbar"
import { Analytics } from '@vercel/analytics/next';

function App() {
  return (
        <div id="outer-container" className="dark">
              <div className=" h-20 bg-neutral-950">
                <Navbar />
              </div>
              <div id="page-wrap" className=" bg-neutral-950">
                <MainBody />
              </div>
              <div className=" bg-neutral-950">
                <Footer />
              </div>
              <Analytics />
        </div>
  )
}

export default App
