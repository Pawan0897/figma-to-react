import circle_icon from "../../img/icon/code-circle.jpg";
import mobile from "../../img/icon/mobile.png";
import cpu from "../../img/icon/cpu.png";
import cloud from "../../img/icon/cloud.png";
import monitor_mobbile from "../../img/icon/monitor-mobbile.png";
import box_2 from "../../img/icon/box-2.png";
import { MdArrowOutward } from "react-icons/md";
import { AnimatePresence, motion as Motion } from "motion/react";
import { useState } from "react";
export default function SectionFifth() {
    const [hovered, setHovered] = useState(1);
    return (
        <>
            <section className='sectionFifth ps-20 pe-20 pt-20 pb-20'>
                <div className="container-fluid">
                    <div className="row mb-10">
                        <div className="col-md-6 col-sm-8">
                            <div className="section_fifth_title">
                                <h3>
                                    End-to-End Software & E-Commerce Development Services with Global Experts
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* *********** */}
                    <div className="row ">
                        <div className="col-md-4 p-3  md-pb">
                            <div className="section_fifth_card">
                                {/* ***** */}
                                <div className="card p-4 position-relative"
                                    onMouseEnter={() => setHovered(0)}
                                    onMouseLeave={() => setHovered(1)}>
                                    <AnimatePresence mode="wait">
                                        {hovered === 0 && (
                                            <Motion.div
                                                layoutId="hoverBackground"
                                                style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 5, background: '#000', borderRadius: 12 }}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } }}
                                                exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
                                            />
                                        )}
                                    </AnimatePresence>
                                    {/* ****** */}
                                    <div className="section_fifth_card_icon z-20">
                                        <img src={circle_icon} width={50} alt="" />
                                    </div>
                                    {/* ********* */}
                                    <div className="section_fifth_title mt-6 z-20">
                                        <div className="content">
                                            <h5 className={`font-semibold ${hovered === 0 ? 'text-light' : 'text_black'}`}>
                                                Custom Development<br></br> Service
                                            </h5>
                                            <p className={` ${hovered === 1 ? "text_grey" : "text_grey"}`}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                        </div>
                                        {/* ************* */}
                                        <div className="arrow_icon flex justify-end">
                                            <div className="icon ">
                                                <MdArrowOutward />
                                            </div>
                                        </div>
                                    </div>
                                    {/* ********** */}
                                </div>
                            </div>

                        </div>
                        {/* ************************************   .......................... */}
                        <div className="col-md-4 p-3 md-pb">
                            <div className="section_fifth_card">
                                {/* ***** */}
                                <div className="card  p-4 position-relative"
                                    onMouseEnter={() => setHovered(1)}
                                    onMouseLeave={() => setHovered(1)}>
                                    <AnimatePresence mode="wait">
                                        {hovered === 1 && (
                                            <Motion.div
                                                layoutId="hoverBackground"
                                                style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10, background: '#000', borderRadius: 12 }}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } }}
                                                exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
                                            />
                                        )}
                                    </AnimatePresence>
                                    {/* ****** */}
                                    <div className="section_fifth_card_icon z-10 ">
                                        <img src={mobile} width={50} alt="" />
                                    </div>
                                    {/* ********* */}
                                    <div className="section_fifth_title mt-6 z-10">
                                        <div className="content">
                                            <h5 className={`font-semibold ${hovered === 1 ? 'text-light' : 'text_black'}`}>
                                                Applications<br></br> Modernization
                                            </h5>
                                            <p className={` text_grey`}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                        </div>
                                        {/* ************* */}
                                        <div className="arrow_icon flex justify-end">
                                            <div className="icon ">
                                                <MdArrowOutward />
                                            </div>
                                        </div>
                                    </div>
                                    {/* ********** */}
                                </div>
                            </div>

                        </div>
                        {/* ************************************   .......................... */}
                        <div className="col-md-4 p-3 md-pb">
                            <div className="section_fifth_card">
                                {/* ***** */}
                                <div className="card p-4 position-relative"
                                    onMouseEnter={() => setHovered(2)}
                                    onMouseLeave={() => setHovered(1)}>
                                    <AnimatePresence mode="wait">
                                        {hovered === 2 && (
                                            <Motion.div
                                                layoutId="hoverBackground"
                                                style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10, background: '#000', borderRadius: 12 }}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } }}
                                                exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
                                            />
                                        )}
                                    </AnimatePresence>
                                    {/* ****** */}
                                    <div className="section_fifth_card_icon z-10">
                                        <img src={cpu} width={50} alt="" />
                                    </div>
                                    {/* ********* */}
                                    <div className="section_fifth_title mt-6 z-10">
                                        <div className="content">
                                            <h5 className={`font-semibold ${hovered === 2 ? 'text-light' : 'text_black'}`}>
                                                Digital <br></br>Transformations
                                            </h5>
                                            <p className={` text_grey`}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                        </div>
                                        {/* ************* */}
                                        <div className="arrow_icon flex justify-end">
                                            <div className="icon ">
                                                <MdArrowOutward />
                                            </div>
                                        </div>
                                    </div>
                                    {/* ********** */}
                                </div>
                            </div>

                        </div>
                        {/* ************************************   .......................... */}
                        <div className="col-md-4 p-3 md-pb">
                            <div className="section_fifth_card">
                                {/* ***** */}
                                <div className="card p-4 position-relative"
                                    onMouseEnter={() => setHovered(3)}
                                    onMouseLeave={() => setHovered(1)}>
                                    <AnimatePresence mode="wait">
                                        {hovered === 3 && (
                                            <Motion.div
                                                layoutId="hoverBackground"
                                                style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10, background: '#000', borderRadius: 12 }}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } }}
                                                exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
                                            />
                                        )}
                                    </AnimatePresence>
                                    {/* ****** */}
                                    <div className="section_fifth_card_icon z-10">
                                        <img src={cloud} width={50} alt="" />
                                    </div>
                                    {/* ********* */}
                                    <div className="section_fifth_title mt-6 z-10">
                                        <div className="content">
                                            <h5 className={`font-semibold ${hovered === 3 ? 'text-light' : 'text_black'}`}>
                                                Offshore Development <br></br>Service
                                            </h5>
                                            <p className={` text_grey`}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                        </div>
                                        {/* ************* */}
                                        <div className="arrow_icon flex justify-end">
                                            <div className="icon ">
                                                <MdArrowOutward />
                                            </div>
                                        </div>
                                    </div>
                                    {/* ********** */}
                                </div>
                            </div>

                        </div>
                        {/* ************************************   .......................... */}
                        <div className="col-md-4 p-3 md-pb">
                            <div className="section_fifth_card">
                                {/* ***** */}
                                <div className="card p-4 position-relative"
                                    onMouseEnter={() => setHovered(4)}
                                    onMouseLeave={() => setHovered(1)}>
                                    <AnimatePresence mode="wait">
                                        {hovered === 4 && (
                                            <Motion.div
                                                layoutId="hoverBackground"
                                                style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10, background: '#000', borderRadius: 12 }}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } }}
                                                exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
                                            />
                                        )}
                                    </AnimatePresence>
                                    {/* ****** */}
                                    <div className="section_fifth_card_icon z-10">
                                        <img src={monitor_mobbile} width={50} alt="" />
                                    </div>
                                    {/* ********* */}
                                    <div className="section_fifth_title mt-6 z-10">
                                        <div className="content">
                                            <h5 className={`font-semibold ${hovered === 4 ? 'text-light' : 'text_black'}`}>
                                                Digital Product <br></br> Development Service
                                            </h5>
                                            <p className={` text_grey`}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                        </div>
                                        {/* ************* */}
                                        <div className="arrow_icon flex justify-end">
                                            <div className="icon ">
                                                <MdArrowOutward />
                                            </div>
                                        </div>
                                    </div>
                                    {/* ********** */}
                                </div>
                            </div>

                        </div>
                        {/* ************************************   .......................... */}
                        <div className="col-md-4 p-3 md-pb">
                            <div className="section_fifth_card">
                                {/* ***** */}
                                <div className="card p-4 position-relative"
                                    onMouseEnter={() => setHovered(5)}
                                    onMouseLeave={() => setHovered(1)}>
                                    <AnimatePresence mode="wait">
                                        {hovered === 5 && (
                                            <Motion.div
                                                layoutId="hoverBackground"
                                                style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10, background: '#000', borderRadius: 12 }}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } }}
                                                exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
                                            />
                                        )}
                                    </AnimatePresence>
                                    {/* ****** */}
                                    <div className="section_fifth_card_icon z-10">
                                        <img src={box_2} width={50} alt="" />
                                    </div>
                                    {/* ********* */}
                                    <div className="section_fifth_title mt-6 z-10">
                                        <div className="content">
                                            <h5 className={`font-semibold ${hovered === 5 ? 'text-light' : 'text_black'}`}>
                                                Gen Ai <br></br>Service
                                            </h5>
                                            <p className={` text_grey`}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                        </div>
                                        {/* ************* */}
                                        <div className="arrow_icon flex justify-end">
                                            <div className="icon ">
                                                <MdArrowOutward />
                                            </div>
                                        </div>
                                    </div>
                                    {/* ********** */}
                                </div>
                            </div>

                        </div>
                        {/* ************************************   .......................... */}
                    </div>
                </div>

            </section>

        </>
    )
}
