import React, { useState } from 'react'
import style from './Portfolio.module.css'
import img1 from './../../assets/port1.png'
import img2 from './../../assets/port2.png'
import img3 from './../../assets/port3.png'
import Header from '../Header/Header'
export default function Portfolio() {
    const [imgClicked, setImgClicked] = useState(false); // imgClicked === flag if the img was clicked
    const [image, setImage] = useState("");    // image save the imageUrl that I have clicked
    const imgs = [img1, img2, img3, img1, img2, img3];
    const t = true, f = false;

    function openImage(image) {
        setImage(image);
        setImgClicked(t);
    }

    function hideImage(e) {
        // console.log(e);
        if (e == undefined) {
            // console.log(e);
            setImgClicked(f);
            setImage("");
        }
    }
    function imageCard(imgurl, id) {

        return (
            <>
                <div className="col-lg-4">
                    <div onClick={() => openImage(imgurl)} key={id}>
                        <div className="image rounded-2 overflow-hidden position-relative">
                            <img src={imgurl} alt="portfolio" />
                            <div className="layer position-absolute top-0 start-0 h-100 w-100 justify-content-center align-items-center d-flex">
                                <i className="fa-solid fa-plus text-white"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )

    }
    return <>

        <div className={`portfolio mmtt p-5 d-flex align-items-center justify-content-center vh-90 pt-2 marg-bottom`}>
            {
                imgClicked ? (
                    <div className="position-fixed d-flex justify-content-center align-items-center top-0 start-0 h-100 w-100 z-3 bg-primary bg-opacity-25"
                        onClick={(e) => hideImage(e.target.src)}>
                        <div className="overflow-hidden" style={{ width: "600px" }}>
                            <img className='rounded-3' src={image} />
                        </div>

                    </div>
                ) : null
            }

            <div className="container p-5 pt-5 text-center">
                <Header title="PORTFOLIO COMPONENT" />
                <div className="row g-4 mb-5">
                    {imgs.map((ele, index) => {
                        return (
                            imageCard(ele, index)
                        )
                    })}
                </div>
            </div>

        </div>

    </>
}
