import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return <>
    <nav className={`${style.bg_color} py-4 fixed-top`}>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>
          <a href="#" className={`${style.abold}`}>START FRAMEWORK</a>
          <div>
            <ul className='list-unstyled d-flex mt-2'>
              <li><Link to={'/'} className='text-decoration-none text-white me-5 fw-bold fs-5'>About</Link></li>
              <li><Link to={'portfolio'} className='text-decoration-none text-white me-5 fw-bold fs-5'>Portfolio</Link></li>
              <li><Link to={'contact'} className='text-decoration-none text-white me-5 fw-bold fs-5'>Content</Link></li>
            </ul>
          </div>
        </div>
      </div>

    </nav>
  </>
}
