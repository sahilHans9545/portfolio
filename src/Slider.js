import React , { useEffect } from 'react'
import head1 from "./images/head1.jpg";
import head2 from "./images/head2.png";
import head3 from "./images/head3.jpg";


function Slider() {

    useEffect(()=>{

        const Slider=()=>{
            const sliderdots=[...document.querySelectorAll(".slider-dots .dot")];
    
            
               let sliderImages=document.querySelectorAll(".inner-slider .item img")
               
               let imageWidth=sliderImages[0].clientWidth
            
               const innerslider=document.querySelector(".inner-slider");
            
               let countSlide=0;
            
               const changeBg=(num)=>{
                    innerslider.style.transform=`translateX(${-(num * imageWidth)}px)`
               }
            
               const maintainSliderClasses=(num)=>{
                for(let i=0;i<sliderdots.length;i++){
                        sliderdots[i].classList.remove("dot-bg");
                        sliderdots[num].classList.add("dot-bg");
                        sliderImages[i].classList.remove('slide')
                        sliderImages[num].classList.add('slide')
                    }
               }
            
               sliderdots.forEach((dot,ind)=>{
                   dot.addEventListener("click",()=>{
                    
                    countSlide=ind;
                       changeBg(countSlide);
            
                       clearInterval(sliderInterval);
                       maintainSliderClasses(ind);
                   })
               })
            
            
               const sliderInterval=setInterval(()=>{
                   countSlide++
                   if(countSlide===3){
                       countSlide=0;
                   }
            
                   maintainSliderClasses(countSlide);
            
            
                   changeBg(countSlide);
               },4000)
        }

        Slider();

    },[])

    return (
        <div className="head-slider">

        <div className="inner-slider">
            <div className="item">
                <img src={head1} alt="" />
            </div>

            <div className="item">
                <img src={head2} alt="" />
            </div>

            <div className="item">
                <img src={head3} alt="" />
            </div>

        </div>

        <div className="slider-dots">
            <div className="dot dot-bg"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>

    </div>
    )
}

export default Slider
