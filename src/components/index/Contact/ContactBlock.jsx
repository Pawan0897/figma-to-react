import React from 'react'
import ContactForm from './ContactForm'
import bg_img from "./img/contact_bg.png"
import "./style.css"
export default function ContactBlock() {
    return (
        <>
            <section className='sectionNinth px-50 py-20'>
                <div className="container-fluid">
                    <div className="row justify-center">
                        <div className="col-md-6 col-lg-7 col-sm-6 col-xs-6">
                            <ContactForm />
                        </div>
                        <div className="col-md-6 col-lg-5 col-sm-6 col-xs-6">
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
