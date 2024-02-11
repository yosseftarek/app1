import React from 'react'
import style from './Portfolio.module.css'
import img1 from './../../assets/port1.png'
import img2 from './../../assets/port2.png'
import img3 from './../../assets/port3.png'
export default function Portfolio() {
    return <>
        <div className={`${style.marg} py-4`}>
            <div className='head mb-3'>
                <h1 className={`${style.bg_color} text-center fw-bold`}>PORTFOLIO COMPONENT</h1>
                <div className='d-flex justify-content-center align-items-center mb-2'>
                    <div className={`${style.line} ${style.bg_color}`}></div>
                    <i className={`${style.bg_color} fa-solid fa-star px-4`}></i>
                    <div className={`${style.line} ${style.bg_color}`}> </div>
                </div>
            </div>
            <div className='container'>
                <div className="row g-5">
                    <div className="col-md-4">
                        <div className="position-relative">
                            <img src={img1} alt="" className='img-fluid rounded-3' />
                            <div className={`rounded-3 position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ${style.hov}`}>
                                <i className='fa-solid fa-plus text-white fa-6x'></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="position-relative">
                            <img src={img2} alt="" className='img-fluid rounded-3' />
                            <div className={`rounded-3 position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ${style.hov}`}>
                                <i className='fa-solid fa-plus text-white fa-6x'></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="position-relative">
                            <img src={img3} alt="" className='img-fluid rounded-3' />
                            <div className={`rounded-3 position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ${style.hov}`}>
                                <i className='fa-solid fa-plus text-white fa-6x'></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="position-relative">
                            <img src={img1} alt="" className='img-fluid rounded-3' />
                            <div className={`rounded-3 position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ${style.hov}`}>
                                <i className='fa-solid fa-plus text-white fa-6x'></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="position-relative">
                            <img src={img2} alt="" className='img-fluid rounded-3' />
                            <div className={`rounded-3 position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ${style.hov}`}>
                                <i className='fa-solid fa-plus text-white fa-6x'></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="position-relative">
                            <img src={img3} alt="" className='img-fluid rounded-3' />
                            <div className={`rounded-3 position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ${style.hov}`}>
                                <i className='fa-solid fa-plus text-white fa-6x'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center ${style.above} d-none`}>
                <img src={img1} alt="" className={`${style.imgWidth}`} />
            </div>
        </div>

    </>
}
