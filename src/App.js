import React from 'react'
import Home from './pages/Home';
import Guide from './pages/Guide';
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom"
import BottomNavigation from "./components/BottomNavigation"
import Textile from './pages/Textile';
import TextileInfo from './pages/TextileInfo';
import TextileDirection from './pages/TextitleDirection';
import AddItem from './pages/AddItem';

const App = () => {
  return (
      <div className="app bg-primary p-5 h-full xl:max-w-6xl xl:shadow-lg xl:mx-auto xl:p-10">
          <Router>
              <Routes>
                  <Route path="/" element={<Home />} exact />
                  <Route path="/guide" element={<Guide />} />
                  <Route path="/textile" element={<Textile />} />
                  <Route path="/textile-info" element={<TextileInfo />} />
                  <Route
                      path="/textile-direction"
                      element={<TextileDirection />}
                  />
                  <Route path="/add-item" element={<AddItem />} />
              </Routes>
              {/* bottom navigation */}
              <Link to="/add-item">
                  <div id="diamond"></div>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 absolute left-40 mr-4 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#fff "
                  >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                      />
                  </svg>
              </Link>{" "}
              <p className="text-center font-semibold mt-2">Add Item</p>
              <hr className="my-2 bg-black " />
              <BottomNavigation />
          </Router>
      </div>
  );
}

export default App
