import React from 'react'
import testimonialData from './tesimonialData'
import { useEffect } from 'react';

function Testimonials() {

    

    

useEffect(()=>{
    let countreview=1
    
    const prevBtn=document.querySelector(".testimonial .prev")
    const nextBtn=document.querySelector(".testimonial .next")
    const innerContainer=document.querySelector(".testimonial .inner-container")
    const items=document.querySelectorAll(".testimonial .inner-container .item")
    console.log(items.length)
    // nextBtn.addEventListener("click",()=>{
        
    //     if(countreview===testimonialData.length){
    //         return;
    //     }
    //     countreview++;
        
    //     changeReview(countreview);
    // })

    // prevBtn.addEventListener("click",()=>{

    //     if(countreview===0){
    //         return;
    //     }
    //     else{
    //         countreview--;
    //         changeReview(countreview)
    //     }
        
    // })
    let itemWidth=document.querySelectorAll(".testimonial .item")[0].offsetWidth
    innerContainer.style.transform=`translateX(${-(itemWidth*countreview)}px)`

    nextBtn.addEventListener("click",()=>{
        if(countreview===items.length-1){
            return;
        }
        innerContainer.style.transition="transform 0.4s ease-in-out"
        countreview++;
        changeReview(countreview);
    })

    prevBtn.addEventListener("click",()=>{
        if(countreview===0)return;
        innerContainer.style.transition="transform 0.4s ease-in-out"
        countreview--;
        changeReview(countreview)
    })









    const changeReview=(count)=>{
        let itemWidth=document.querySelectorAll(".testimonial .item")[0].offsetWidth
        innerContainer.style.transform=`translateX(${-(itemWidth*count)}px)`
    }

    innerContainer.addEventListener("transitionend",()=>{
        let itemWidth=document.querySelectorAll(".testimonial .item")[0].offsetWidth
        if(countreview===0){
            innerContainer.style.transition= "none";
            countreview=items.length-2;
            innerContainer.style.transform=`translateX(${-(itemWidth*countreview)}px)`
        }

        if(countreview===items.length-1){
            innerContainer.style.transition= "none";
            countreview=1;
            innerContainer.style.transform=`translateX(${-(itemWidth*countreview)}px)`
        }
        
    })

},[])

    

    return (
        <section className=" py-5 testimonial" id="testimonial">
        <div className="px-md-5 p">
            <h1 className="section-heading">Testimonials</h1>
            <p className="my-3">Here the the number of reviews that my clients wrote for me after the work. To Ckeck all reviews you can visit at <a href="https://www.freelancer.com/u/hanss9545">www.freelancer.com/u/hanss9545</a></p>
        </div>
            <div className="container">
                <div className="inner-container">

                <div className="item" id="lastClone">
                        <p className="box"><i className="fas fa-quote-left mx-1"></i> Last clone {testimonialData[testimonialData.length-1].review} <i className="fas fa-quote-right mx-1"></i></p>
                        <div className="profile-icon">
                            <img src={process.env.PUBLIC_URL+"/images/blankProfile.jpg"} alt="" />
                        </div>
                        <div className="details">
                            <h4>{testimonialData[testimonialData.length-1].name}</h4>
                            <p>{testimonialData[testimonialData.length-1].work}</p>
                        </div>
                    </div>

                {testimonialData.map((e)=>{
                    return <div className="item" key={e.id}>
                        <p className="box"><i className="fas fa-quote-left mx-1"></i> {e.review} <i className="fas fa-quote-right mx-1"></i></p>
                        <div className="profile-icon">
                            <img src={process.env.PUBLIC_URL+"/images/blankProfile.jpg"} alt="" />
                        </div>
                        <div className="details">
                            <h4>{e.name}</h4>
                            <p>{e.work}</p>
                        </div>
                    </div>
                })}


                <div className="item" id="firstClone">
                        <p className="box"><i className="fas fa-quote-left mx-1"></i> First clone {testimonialData[0].review} <i className="fas fa-quote-right mx-1"></i></p>
                        <div className="profile-icon">
                            <img src={process.env.PUBLIC_URL+"/images/blankProfile.jpg"} alt="" />
                        </div>
                        <div className="details">
                            <h4>{testimonialData[0].name}</h4>
                            <p>{testimonialData[0].work}</p>
                        </div>
                    </div>
                    

                    
                </div>

                <div className="buttons">
                    <div className="prev"><i className="fas fa-arrow-left"></i></div>
                    <div className="next"><i className="fas fa-arrow-right"></i></div>
                </div>

            </div>

        </section>
    )
}

export default Testimonials
