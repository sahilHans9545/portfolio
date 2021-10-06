import React from 'react';
import AboutDetails from './AboutDetails';

function About() {
    return (
        <section className="px-md-5 px-3 py-5 About">
            <h1 className="section-heading">About</h1>
            <p className="my-3">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            <div className="row mt-4">
                <div className="col-lg-4">
                    <img className="img-fluid" src={process.env.PUBLIC_URL+"/images/sahil-profile.jpg"} alt="" />
                </div>
                <div className="col-lg-8 mt-4 mt-lg-0">
                    <h2 className="section-heading">UI/UX Designer & Web Developer.</h2>
                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <div className="row mt-4">
                    {AboutDetails.map((e,ind)=>{
                        return <div className="col-md-6" key={ind}>
                                    <p><i className="fas fa-chevron-circle-right"></i> <strong>{e.title} :</strong> {e.text}</p>
                                </div>
                    })}
                        
                    </div>

                    <p className="mt-4">Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p>
                </div>
            </div>
        </section>    
    )
}

export default About
