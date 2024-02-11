import React from 'react'
import style from './Contact.module.css'
export default function Contact() {
    return <>
        <div className={`${style.marg} mb-5 pt-2`}>
            <div className='head mb-3'>
                <h1 className={`${style.color} text-center fw-bold`}>CONTACT SECTION</h1>
                <div className='d-flex justify-content-center align-items-center mb-2'>
                    <div className={`${style.line} ${style.color}`}></div>
                    <i className={`${style.color} fa-solid fa-star px-4`}></i>
                    <div className={`${style.line} ${style.color}`}> </div>
                </div>
            </div>
            <div className={`${style.conatinr}`}>

                <div className='mt-5'>
                    <input type="text" className=' border-0 border-bottom py-3 position-relative w-100' placeholder='userName' />
                </div>
                <div className='mt-5'>
                    <input type="text" className=' border-0 border-bottom py-3 position-relative w-100' placeholder='userAge' />
                </div>
                <div className='mt-5'>
                    <input type="text" className=' border-0 border-bottom py-3 position-relative w-100' placeholder='userEmail' />
                </div>
                <div className='mt-5'>
                    <input type="password" className=' border-0 border-bottom py-3 position-relative w-100' placeholder='userPassword' />
                </div>
                <div>
                    <button className={`btn mt-3 ${style.button_color}`}>Send Message </button>
                </div>

            </div>

        </div>
    </>
}
