import React from 'react'
import line23 from "../../img/line/line23.png"
import line24 from "../../img/line/line24.png"
import line25 from "../../img/line/line25.png"
import line26 from "../../img/line/line26.png"
import line22 from "../../img/line/line22.png"
import line28 from "../../img/line/line28.png"
import line29 from "../../img/line/line29.png"
import line30 from "../../img/line/line30.png"
import line31 from "../../img/line/line31.png"
import line33 from "../../img/line/line33.png"
import line34 from "../../img/line/line34.png"
import line37 from "../../img/line/line37.png"
import line38 from "../../img/line/line38.png"
import line39 from "../../img/line/line39.png"
import scroller from "../../img/svg/bubbling.gif"
export default function SectionOne() {
    return (
        <>
            <section className="relative flex flex-col items-center justify-center min-h-screen sectionOne  overflow-hidden">
                <div className="container">
                    <div className="row">
                        {/* ************* lines */}
                        <div className="bg_line absolute z-0">
                            <div className="bgline_sectionOne relative ">
                                <img src={line23} width={2} />
                                {/* \*************** */}

                                <img src={line24} width={2} />
                                {/* \*************** */}

                                <img src={line25} width={2} />
                                {/* \*************** */}

                                <img src={line39} width={2} />
                                {/* \*************** */}

                                <img src={line28} width={2} />
                                {/* \*************** */}

                                <img src={line31} width={2} />
                                {/* \*************** */}

                                <img src={line38} width={2} />

                            </div>
                        </div>
                        {/* ************************ bg roller  */}
                        <div className="bgroller_sectionOne flex justify-center items-center ">
                            <img src={scroller} />
                        </div>
                        {/* ********************** */}
                        {/* ************************** content text */}
                        <div className="banner_sectionOne">
                            <div className="banner_content">
                                <h1>
                                    aialgotechs
                                </h1>
                                <h4 className='text-end'>

                                    bringing the global recruitment solutions
                                </h4>
                                {/* *********** second bloack ... */}
                                <div className="banner_three_block flex justify-center items-center mt-20 gap-30">
                                    <div className="block_one block">
                                        <p>
                                            <span>We empower</span> businesses to <span>Innovate</span>,<br></br> Optimize, and <span>Scale</span>
                                        </p>
                                    </div>
                                    <div className="block_two block">
                                        <p>
                                            Custom <span>app development</span> with<br></br> advanced <span>AI capabilities</span>
                                        </p>
                                    </div>
                                    <div className="block_three block">
                                        <p>
                                            Generative <span>AI solutions</span> fueling<br></br> <span>business innovation</span>.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* ************************* Second line design */}
                        <div className="bg_nextline absolute z-0">
                            <div className="nextline_sectionOne relative">
                                <img src={line22} width={2} />
                                {/* ****** */}
                                <div className="both_line ">
                                    <div className="both_inner_line relative">
                                        <img src={line34} width={2} />
                                        {/* ****** */}
                                        <img src={line37} width={2} />
                                    </div>
                                </div>
                                {/* ****** */}
                                <img src={line26} width={2} />
                                {/* ****** */}
                                <img src={line29} width={2} />
                                {/* ****** */}
                                <img src={line30} width={2} />
                                {/* ****** */}
                                <img src={line33} width={2} />
                                {/* ****** */}
                            </div>
                        </div>

                    </div>
                </div>
            </section >
        </>
    )
}
