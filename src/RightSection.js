import React, { useEffect, useState } from 'react'
import Services from './Services';
import Skills from './skills';
import Slider from './Slider';

function RightSection() {


    let [type, setType] = useState("");

    useEffect(() => {


        const textArr = ["Web Developer", "Freelancer", "Designer"];
        let count = 0;
        let index = 0;
        let textString = "";
        let letter = "";

        const typing = () => {


            if (count === 3) {
                count = 0;
            }

            textString = textArr[count]
            letter = textString.slice(0, ++index);

            setType(letter);
            if (letter.length === textString.length) {
                count++;
                index = 0;
                setTimeout(typing, 3000);
            }
            else {
                setTimeout(typing, 300);
            }
        }
        typing();


    }, []);

    return (
        <div className="right-section">

            <header>

                <Slider />


                <div className="text-cont">
                    <h1>Sahil Hans</h1>
                    <h3>I am <span className="typing">{type}</span></h3>
                </div>

                <div className="profile-head">

                </div>


            </header>
            <Skills></Skills>
            <Services></Services>
        </div>
    )
}

export default RightSection
