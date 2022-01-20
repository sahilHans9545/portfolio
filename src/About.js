import React from 'react';
import AboutDetails from './AboutDetails';

function About() {
    return (
        <section className="px-md-5 px-3 py-5 About" id="about">
            <h1 className="section-heading">About</h1>
            <p className="my-3">Hey I m Sahil,   </p>
            <div className="row mt-4">
                <div className="col-lg-4">
                    <img className="img-fluid" src={process.env.PUBLIC_URL+"/images/sahilProfile.png"} alt="" />
                </div>
                <div className="col-lg-8 mt-4 mt-lg-0">
                    <h2 className="section-heading">UI/UX Designer & Web Developer.</h2>
                    
                    {/* <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}

                    <div className="row mt-4">
                    {AboutDetails.map((e,ind)=>{
                        return <div className="col-md-6" key={ind}>
                                    <p><i className="fas fa-chevron-circle-right"></i> <strong>{e.title} :</strong> {e.text}</p>
                                </div>
                    })}
                        
                    </div>

                    <p className="mt-4">Here are my Education details--- <br />
                    I am a Btech cse student. I am doing this course from Guru Govind Singh Inderprasth University. <br />
                    I have completed my class 12th in 2020 with a percentage of 93.2
                    I have started my developer career after my class 12th during lockdown. I have first learned html and slowly and steadily it becomes my passion to do coding. I have made some websites as practice then i started freelancing on Freelancer.com, I am also available for Interships.
                    If you want any website for your portfolio, company , etc so you can contact me via email or any other social platform as I have also mentioned my profiles.
                    
                    </p>
                    <br />
                    <h2>My Freelancer Account <a href="https://www.freelancer.com/u/hanss9545">www.freelancer.com/u/hanss9545</a></h2>
                </div>
            </div>
        </section>    
    )
}

export default About
