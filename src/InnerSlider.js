import React, { useEffect, useState } from 'react'

function InnerSlider() {

    const [sliderIndex, setSliderIndex] = useState(0);


    const changeSlide = (ind) => {
        setSliderIndex(ind)
    }

    let imgPath = process.env.PUBLIC_URL

    const imgArr = [imgPath + "/images/head1.jpg", imgPath + "/images/head2.jpg", imgPath + "/images/head3.jpg"]


    useEffect(()=>{

        let ss=0;

        setInterval(() => {
            if(ss===3){
                ss=0
            }
            console.log("helo")
            setSliderIndex(ss)
            ss++;
        }, 5000);
    },[])



    return (
        <>
            <div className="inner-slider">
                {imgArr.map((e, index) => {
                    return <div className={sliderIndex === index ? "slide active-slide" : "slide"} key={index}>
                        <img src={e} alt="" />
                    </div>
                })}

            </div>


            <div className="dots">
                {imgArr.map((e, index) => {
                    return (<div className={sliderIndex === index ? "dot active-dot" : "dot"} key={index} onClick={() => {
                        changeSlide(index)
                    }}></div>)
                })}
            </div>

        </>
    )
}

export default InnerSlider
