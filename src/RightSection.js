import React, { useEffect, useState } from 'react'

function RightSection() {

    let [type,setType]=useState("");
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

    useEffect(()=>{
        typing();
    },[]);

    return (
        <div className="right-section">
            <header>
            
            <div className="text-cont">
                <h1>Sahil Hans</h1>
                <h3>I am <span className="typing">{type}</span></h3>
            </div>

                
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="#fff" fillOpacity="1" d="M0,32L80,32C160,32,320,32,480,58.7C640,85,800,139,960,149.3C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </header>
        </div>
    )
}

export default RightSection
