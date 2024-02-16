import React from 'react'
import style from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
  return <>
  
    <nav className={`${style.bg_color} py-4 fixed-top`}>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>
          <a href="#" className={`${style.abold}`}>START FRAMEWORK</a>
          <div>
            <ul className='list-unstyled d-flex mt-2'>
              {/* هنا عملت الناف لينك بالشكل دا   */}
              <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={'/'} className='text-decoration-none text-white me-5 fw-bold fs-5'>About</NavLink></li>
              <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={'portfolio'} className='text-decoration-none text-white me-5 fw-bold fs-5'>Portfolio</NavLink></li>
              <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={'contact'} className='text-decoration-none text-white me-5 fw-bold fs-5'>Content</NavLink></li>
            </ul>
          </div>
        </div>
      </div>

    </nav>
  </>
}
