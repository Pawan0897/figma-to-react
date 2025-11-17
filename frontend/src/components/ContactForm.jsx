import React from 'react'

export default function ContactForm() {
    return (
        <>
            <div className="section_ninth_contact_form p-10 rounded-2xl ">
                <div className="contact_form_bg px-3 py-4 ">


                    <div className="contact_title mb-5 ">
                        <h3 className='text-light'>
                            Request a Service
                        </h3>
                        <p className='text-amber-50'>We make your recruitment challenges simpler by providing
                            all the guidance, tools and support.</p>
                    </div>
                    <div className="contact_form ">
                        <div className="row">
                            {/* ******************* */}
                            <div className="col-md-6 mb-10">
                                <input type="text " className='px-2 py-2 form-control' placeholder='First Name' />
                            </div>
                            {/* ********************* */}
                            <div className="col-md-6 mb-10">
                                <input type="text " className='px-2 py-2 form-control' placeholder='Last Name' />
                            </div>
                            {/* ********************* */}
                            <div className="col-md-12 mb-10">
                                <input type="text " className='px-2 py-2 form-control' placeholder='Enter Your Email' />
                            </div>
                            {/* ********************* */}
                            <div className="col-md-12 mb-10">
                                <input type="text " className='px-2 py-2 form-control' placeholder='Phone' />
                            </div>
                            {/* ********************* */}
                            <div className="col-md-6 mb-10">
                                <input type="text " className='px-2 py-2 form-control' placeholder='Job Title' />
                            </div>
                            {/* ********************* */}
                            <div className="col-md-6 mb-10">
                                <input type="text " className='px-2 py-2 form-control' placeholder='Company (if any)' />
                            </div>
                            {/* ********************* */}
                            <div className="col-md-12 mb-10">
                                <input type="text " className='px-2 py-2 form-control' placeholder="I'm interested in..." />
                            </div>
                            {/* ********************* */}
                            <div className="col-md-12 mb-10">
                                <textarea type="text " className='px-2 py-2 form-control' placeholder='Message' rows={3}> </textarea>
                            </div>
                            {/* ********************* */}
                            <div className="section_fourth_button flex justify-end">

                                <button class="button_shine me-0 button-otp-mg">
                                    <span class="label"> Start Building Today</span>
                                    <span class="gradient-container">
                                        <span class="gradient"></span>
                                    </span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
