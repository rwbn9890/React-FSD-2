

import React from 'react'
import Card from './Card'

const Footer = () => {
  return (
    <div>
      <div className="max-w-7xl bg-slate-300 mx-auto my-5 shadow p-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-3 md:gap-4 lg:gap-6  gap-4">
          <div className="shadow p-4 bg-white hover:bg-slate-900 hover:text-white">
           <Card/>
          </div>
          <div className="shadow p-4 bg-white ">
            <ul>
              <li>ABout</li>
              <li>HOme</li>
              <li>Features</li>
              <li>Contact</li>
              <li>GEst STarted</li>
              <li>checked</li>
            </ul>
          </div>
          <div className="shadow p-4 bg-white ">
            <ul>
              <li>ABout</li>
              <li>HOme</li>
              <li>Features</li>
              <li>Contact</li>
              <li>GEst STarted</li>
              <li>checked</li>
            </ul>
          </div>
          <div className="shadow p-4 bg-white ">
            <ul>
              <li>ABout</li>
              <li>HOme</li>
              <li>Features</li>
              <li>Contact</li>
              <li>GEst STarted</li>
              <li>checked</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer