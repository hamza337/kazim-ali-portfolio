import React from 'react';
import Address from '../../Address';
import Contact from '../../Contact';
import Map from '../../Map';


export default function ContactModule() {
    return (
        <div className="edina_tm_contact" id="contact">
            <div className="container">
                <div className="edina_tm_title">
                    <h3>Contact</h3>
                    <p>
                        Contact Sir Syed Kazim Ali
                    </p>
                </div>
                <div className='custom-form-styles'>
                    <div className="extra_info">
                        <Address />
                    </div>
                    <div className="mainpart">
                        <div
                            className="left"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="300"
                        >
                            <div className="title">
                                <p>
                                    I am always open to discussing your problem.
                                    <br />
                                    <span>Fill out the form below.</span>
                                </p>
                            </div>
                            <div className="fields">
                                <Contact />
                            </div>
                        </div>
                        <div
                            className="right d-none"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="400"
                        >
                            <Map />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}