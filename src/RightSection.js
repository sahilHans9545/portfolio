import React, { useEffect, useState } from 'react'
import profile from "./images/sahil-profile.jpg";
import head1 from "./images/head1.jpg";
import head2 from "./images/head2.jpg";
import head3 from "./images/head3.jpg";

function RightSection() {

    let [bg,setbg]=useState(head1);
    let bgImages=[head1,head2,head3];
    let bg_no=0;
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

    const changeBg=()=>{
        if(bg_no===3){
            bg_no=0;
        }
        setbg(bgImages[bg_no])
        bg_no++;
        setTimeout(changeBg,4000)
    }

    
    

    useEffect(()=>{
        typing();
        changeBg();
    },[]);

    return (
        <div className="right-section">
            <header style={{background:`url(${bg})`}}>
           
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
