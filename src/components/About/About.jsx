import React from 'react'
import style from './About.module.css'
export default function About() {
    return <>
        <section className={`${style.bg_color} ${style.about} d-flex justify-content-center align-items-center`}>
            <div>
                <div>
                    <h1 className='text-white text-center'>ABOUT COMPONENT </h1>
                    <div className='d-flex justify-content-center align-items-center mb-2'>
                        <div className={`${style.line}`}></div>
                        <i className="fa-solid fa-star px-4 text-white"></i>
                        <div className={`${style.line}`}> </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including
                                    HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                            <div className="col-md-6">
                                <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including
                                    HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
