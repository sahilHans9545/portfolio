import React from 'react'

function Contact() {
    return (
        <section className="px-md-5 px-3 py-5 contact">
            <h1 className="section-heading">Contact</h1>
            <p className="my-3">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>

<div className="row mt-5 d-flex justify-content-between">
    <div className="p-4 left-contact">
        <div>
            <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
            <div className="text">
                <h3>Location:</h3>
                <p>3558 SGM Nagar, Block-A, Faridabad</p>
            </div>
        </div>

        <div className="mt-2">
            <div className="icon"><i className="far fa-envelope"></i></div>
            <div className="text">
                <h3>Email:</h3>
                <p>hanss9545@gmail.com</p>
            </div>
        </div>


        <div className="mt-2">
            <div className="icon"><i className="fas fa-mobile-alt"></i></div>
            <div className="text">
                <h3>Call</h3>
                <p>+91 7838685511</p>
            </div>
        </div>


        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.598836484472!2d77.28877891491777!3d28.401182182509675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cddd4b6930d57%3A0xc78f1ea0cbc5ff7b!2s3558%2C%20Pocket%20A%2C%20Sanjay%20Gandhi%20Memorial%20Nagar%2C%20Sector%2048%2C%20Faridabad%2C%20Haryana%20121001!5e0!3m2!1sen!2sin!4v1633421092273!5m2!1sen!2sin" style={{border:0}} allowFullScreen="" loading="lazy" title="map"></iframe>


    </div>




    <div className="right-contact p-4">
        <form action="">
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <div className="">
                        <input type="text" id="name" className="form-control" />
                    </div>
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                <label htmlFor="email">Your Email</label>
                    <div className="">
                        <input type="email" id="email" className="form-control" />
                    </div>
                </div>
            </div>

            <div className="mt-4">
            <label htmlFor="subject">Subject</label>
                    <div className="">
                        <input type="text" id="subject" className="form-control" />
                    </div>
            </div>

            <div className="mt-4">
            <label htmlFor="subject">Message</label>
            <div><textarea name="" id="" cols="30" rows="10" className="form-control"></textarea></div>
               
            </div>

            <div className=" mt-4 send">
             <button className="text-white  p-3">Send Message</button> 
            </div>

        </form>
    </div>
</div>


        </section>    
    )
}

export default Contact
