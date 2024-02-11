import React from 'react'
import style from './Fixed.module.css'

export default function Fixed() {
    return <>
        <div className={`${style.bg_color} py-5`}>
            <div className='container'>
                <div className="row">
                    <div className="col-md-4 py-5 text-center text-white">
                        <h2>Location</h2>
                        <span className='d-block pb-3'>2215 John Daniel Drive</span>
                        <span>Clark, MO 65243</span>
                    </div>
                    <div className="col-md-4 py-5 text-center text-white">
                        <h2>AROUND THE WEB</h2>
                        <div className='d-flex justify-content-center align-items-center'>
                            <span className={`${style.sp} rounded-circle border d-flex justify-content-center align-items-center me-2`}><i className="fa-brands fa-facebook-f"></i></span>
                            <span className={`${style.sp} rounded-circle border d-flex justify-content-center align-items-center me-2`}><i className="fa-brands fa-twitter"></i></span>
                            <span className={`${style.sp} rounded-circle border d-flex justify-content-center align-items-center me-2`}><i className="fa-brands fa-linkedin"></i></span>
                            <span className={`${style.sp} rounded-circle border d-flex justify-content-center align-items-center me-2`}><i className="fa-solid fa-globe"></i></span>
                        </div>
                    </div>
                    <div className="col-md-4 py-5 text-center text-white">
                        <h2>ABOUT FREELANCER</h2>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}
