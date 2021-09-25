import React from 'react'
import './index.css';
import profile from "./images/sahil-profile.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
function LeftSection(){
    return (
        <>
            <div className="left-section">
                <div className="profile">
                <img src={profile} alt=""/>
                </div>
                <h3 className="text-center text-white mt-4">Sahil Hans</h3>

                <div className="social-icons w-100 mt-3">
                    <ul className="d-flex justify-content-around">
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-github"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    </ul>
                </div>

                <div className="menu mt-5">
                    <ul>
                        <li><a href="#"><i className="fas fa-home"></i><span>Home</span></a></li>
                        <li><a href="#"><i className="far fa-user-circle"></i><span>About</span></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i><span>Services</span></a></li>
                        <li><a href="#"><i className="fas fa-street-view"></i><span>Testimonials</span></a></li>
                        <li><a href="#"><i className="fas fa-phone-volume"></i><span>Contact</span></a></li>
                    </ul>
                </div>


            </div>
        </>
    )
}

export default LeftSection
