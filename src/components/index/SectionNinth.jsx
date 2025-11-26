import React from 'react'
import ContactForm from '../ContactForm'
import bg_img from "../../img/contact/contact_bg.png"
export default function SectionNinth() {
    return (
        <>
            <section className='sectionNinth mt-20 mb-20'>
                <div className="container">
                    <div className="row justify-center">
                        <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6">
                            <ContactForm />
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-6 col-xs-6">
                            <div className="contact_side_bg">
                                <img src={bg_img} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
