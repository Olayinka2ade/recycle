import React, {useState} from 'react'
import Home from './pages/Home';
import Guide from './pages/Guide';
import { Route, Routes,  BrowserRouter as Router, Link } from "react-router-dom"
import BottomNavigation from "./components/BottomNavigation"
import Textile from './pages/Textile';
import TextileInfo from './pages/TextileInfo';
import TextileDirection from './pages/TextitleDirection';
import AddItem from './pages/AddItem';
import Thumbs from './components/Thumbs'
import button from './images/button.png'

const App = () => {
    const [thumbs, setThumbs] = useState(false)
    const [bin, setBin] = useState(false)

    const toggleThumbs = () => {
        setBin(true)
        setTimeout(() => {
            setBin(false)
        }, 3000)
       
        setTimeout(() => {
            setThumbs(true)
        }, 3000)
        setTimeout(() => {
            setThumbs(false)
        }, 6000)
    }
  return (
      <div className="app bg-primary p-5 h-full xl:max-w-6xl xl:shadow-lg xl:mx-auto xl:p-10">
          <Router>
              <Routes>
                  <Route
                      path="/"
                      element={<Home thumbs={thumbs} bin={bin} />}
                      exact
                  />
                  <Route path="/guide" element={<Guide />} />
                  <Route path="/textile" element={<Textile />} />
                  <Route path="/textile-info" element={<TextileInfo />} />
                  <Route
                      path="/textile-direction"
                      element={<TextileDirection />}
                  />
                  <Route
                      path="/add-item"
                      element={
                          <AddItem
                              thumbs={thumbs}
                              toggleThumbs={toggleThumbs}
                              bin={bin}
                          />
                      }
                  />
              </Routes>
              {/* bottom navigation */}
              {thumbs && <Thumbs />}
              <Link to="/add-item">
                  <div className=''>
                      <img src={button} className='mx-auto relative top-10' alt="button" />
                  </div>
              </Link>{" "}
              <hr className="my-2 bg-black " />
              <BottomNavigation />
          </Router>
      </div>
  );
}

export default App
