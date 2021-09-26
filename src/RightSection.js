import React, { useEffect, useState } from 'react'
import head1 from "./images/head1.jpg";
import head2 from "./images/head2.jpg";
import head3 from "./images/head3.jpg";

function RightSection() {

    
    let [type,setType]=useState("");
    // const textArr=["Web Developer","Freelancer","Designer"];
    //  let count =0;
    //  let index=0;
    //  let textString="";
    //  let letter="";
    

    useEffect(()=>{
        
       
        const textArr=["Web Developer","Freelancer","Designer"];
        let count =0;
        let index=0;
        let textString="";
        let letter="";

        const typing=()=>{


            if(count===3){
                count=0;
            }
    
            textString=textArr[count]
            letter=textString.slice(0,++index);
    
            setType(letter);
            if(letter.length===textString.length){
                count++;
                index=0;
                setTimeout(typing, 3000);
            }
            else{
                setTimeout(typing, 300);
            }
        }
        typing();


        let slider=document.querySelector(".slider");
      let slide_box=document.querySelector(".slide-box");
      let sliderDots=document.querySelectorAll(".slider .dots div");
      let sliderWidth=slider.clientWidth;
      console.log(sliderWidth)

      let slideCount=0;

      setInterval(() => {
        if(slideCount===3){
            slideCount=0;
            slide_box.style.transition="none";
        }
        else{
            slide_box.style.transition="all 0.5s";
        }
        changeSlide(slideCount);
        dotBg(slideCount);
        
        slideCount++;
        
      }, 4000);

      const changeSlide=(Num)=>{
        slide_box.style.transform=`translateX(${ -(Num * sliderWidth)}px)`;
      }

      for(let i=0;i<sliderDots.length;i++){
        sliderDots[i].addEventListener("click",()=>{
            changeSlide(i);
            dotBg(i);
        })
      }

      const dotBg=(white)=>{
        for(let j=0;j<sliderDots.length;j++){
                sliderDots[j].style.background="black";
                sliderDots[white].style.background="#fff"
        }
      }
        

    },[]);

    return (
        <div className="right-section">
            <header>

            <div className="slider">
        <div className="slide-box">
            <div className="slide">
                <img src={head1} alt="" />
            </div>

            <div className="slide">
                <img src={head2} alt="" />
            </div>

            <div className="slide">
                <img src={head3} alt="" />
            </div>
        </div>

        <div className="dots">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>

           
                <div className="text-cont">
                    <h1>Sahil Hans</h1>
                    <h3>I am <span className="typing">{type}</span></h3>
                </div>

                <div className="profile-head">
                    
                </div>
           
            

           
            </header>
        </div>
    )
}

export default RightSection
