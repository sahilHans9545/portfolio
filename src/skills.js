import React, { useEffect } from 'react'

function Skills() {

    useEffect(()=>{

        window.addEventListener("scroll",()=>{
            if(document.querySelector(".skills").getBoundingClientRect().top<400){
                let progress=document.querySelectorAll(".progress");
                let skillTargets=document.querySelectorAll(".skills .target");
                progress.forEach((element,ind)=>{
                    element.style.width=`${skillTargets[ind].innerHTML}`
                })
                document.querySelector(".transY").style.transform="translateY(0px)"
                document.querySelector(".transY").style.opacity="1";
            }
        })
    },[])


    

    
    

    return (
        <section className="px-md-5 px-3 py-5 skills">
            <h1 className="section-heading">Skills</h1>
            <p className="my-3">Here are some of my main skills ---</p>

            <div className="row d-flex justify-content-between transY">

                <div className="col-md-6">
                    <div className="row">
                        <div className="col-12 my-4">

                            <div className="lang d-flex justify-content-between">
                                <span>HTML</span>
                                <span className="target">100%</span>
                            </div>

                            <div className="progress-bar">
                                <div className="progress"></div>
                            </div>
                        </div>

                        <div className="col-12 my-4">
                            <div className="col-12">

                                <div className="lang d-flex justify-content-between">
                                    <span>CSS</span>
                                    <span className="target">95%</span>
                                </div>

                                <div className="progress-bar">
                                    <div className="progress"></div>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 my-4">
                            <div className="col-12">

                                <div className="lang d-flex justify-content-between">
                                    <span>javascript</span>
                                    <span className="target">80%</span>
                                </div>

                                <div className="progress-bar">
                                    <div className="progress"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="row">
                        <div className="col-12 my-4">

                            <div className="lang d-flex justify-content-between">
                                <span>Bootstrap</span>
                                <span className="target">95%</span>
                            </div>

                            <div className="progress-bar">
                                <div className="progress"></div>
                            </div>
                        </div>

                        <div className="col-12 my-4">
                            <div className="col-12">

                                <div className="lang d-flex justify-content-between">
                                    <span>React</span>
                                    <span className="target">80%</span>
                                </div>

                                <div className="progress-bar">
                                    <div className="progress"></div>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 my-4">
                            <div className="col-12">

                                <div className="lang d-flex justify-content-between">
                                    <span>Figma</span>
                                    <span className="target">75%</span>
                                </div>

                                <div className="progress-bar">
                                    <div className="progress"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Skills
