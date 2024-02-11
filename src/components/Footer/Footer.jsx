import React from 'react'
import style from './Footer.module.css'
export default function Footer() {
  return <>
    <footer className={`text-center ${style.bg_color} py-3`}>
      <p className='text-white'>Copyright © Your Website 2021</p>
    </footer >
  </>
}
