import { Toaster } from "sonner";
import Footer from "./components/common/footer"
import MainBody from "./components/common/main-body"
import Navbar from "./components/common/navbar"
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

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
              <SpeedInsights />
              <Toaster />
        </div>
  )
}

export default App
