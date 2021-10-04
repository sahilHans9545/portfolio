import React from 'react'
import testimonialData from './tesimonialData'

function Testimonials() {

    console.log(testimonialData);
    return (
        <section className=" py-5 testimonial">
        <div className="px-md-5 px-3">
            <h1 className="section-heading">Testimonials</h1>
            <p className="my-3">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
            <div class="container">
                <div class="inner-container">

                {testimonialData.map((e)=>{
                    return <div class="item">
                        <p className="box"><i class="fas fa-quote-left mx-1"></i> {e.review} <i class="fas fa-quote-right mx-1"></i></p>
                        <div class="profile-icon">
                            <img src={process.env.PUBLIC_URL+"/images/blankProfile.jpg"} alt="" />
                        </div>
                        <div className="details">
                            <h4>{e.name}</h4>
                            <p>{e.work}</p>
                        </div>
                    </div>
                })}
                    

                    
                </div>

                <div className="buttons">
                    <div className="prev"><i class="fas fa-arrow-left"></i></div>
                    <div className="next"><i class="fas fa-arrow-right"></i></div>
                </div>

            </div>

        </section>
    )
}

export default Testimonials
