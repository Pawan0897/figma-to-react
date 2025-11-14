import React from 'react'
import badge1 from "../../img/badges/badge1.png"
import badge2 from "../../img/badges/badge2.png"
import badge3 from "../../img/badges/badge3.png"
import badge4 from "../../img/badges/badge4.png"
export default function SectionSixth() {
    return (
        <>
            <section className='sectionSixth mt-25 mb-25'>
                <div className=" px-20 section_sixth_bg rounded-2xl container">
                    <div className="section_sixth_inner_blocks px-10 py-3">


                        <div className="row">
                            <div className="col-md-8">
                                <div className="section_sixth_title mb-5 mt-10">
                                    <h3 className='text-white font-semibold'>
                                        End-to-End Software & E-Commerce <br></br>Development Services with Global Experts
                                    </h3>
                                </div>
                                {/* ****************** */}

                            </div>
                        </div>
                        {/* *********** */}
                        <div className="row mb-4">
                            {/* ********************* */}
                            <div className="col-md-3">
                                <div className="section_sixth_card text-center rounded-2xl px-7 py-4 ">
                                    <div className="card border-0  flex justify-center items-center ">
                                        <div className="badges_img flex justify-center items-center border-0">
                                            <img src={badge1} />
                                        </div>
                                        <div className="badge_title mt-10">
                                            <h5 className='text-light font-semibold'>Top Mobile App<br></br> Development</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ********************************* */}
                            <div className="col-md-3">
                                <div className="section_sixth_card text-center rounded-2xl px-7 py-4 ">
                                    <div className="card border-0  flex justify-center items-center  ">
                                        <div className="badges_img flex justify-center items-center border-0">
                                            <img src={badge4} />
                                        </div>
                                        <div className="badge_title mt-10">
                                            <h5 className='text-light font-semibold'>
                                                Upwork Top Rated <br></br> Profile
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ********************************* */}
                            <div className="col-md-3">
                                <div className="section_sixth_card text-center rounded-2xl px-7 py-4 ">
                                    <div className="card border-0  flex justify-center items-center  ">
                                        <div className="badges_img flex justify-center items-center border-0">
                                            <img src={badge2} />
                                        </div>
                                        <div className="badge_title mt-10">
                                            <h5 className='text-light font-semibold'>Upwork Expert Vetted<br></br> Profile</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ********************************* */}
                            <div className="col-md-3">
                                <div className="section_sixth_card text-center rounded-2xl px-7 py-4 ">
                                    <div className="card border-0  flex justify-center items-center ">
                                        <div className="badges_img flex justify-center items-center border-0">
                                            <img src={badge3} />
                                        </div>
                                        <div className="badge_title mt-10">
                                            <h5 className='text-light font-semibold'>Google Five Star<br></br> Rating</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ********************************* */}
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}
