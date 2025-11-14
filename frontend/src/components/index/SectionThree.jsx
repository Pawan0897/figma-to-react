import robo_img from "../../img/robo_img.png";
import blur_square from "../../img/blur.png"
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";
export default function SectionThree() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });
    return (
        <>
            <section className='sectionThree py-20 relative' ref={ref}>
                <div className="section_three_bg absolute z-0 end-0 top-0">
                    <div className="bg_img">
                        <img src={robo_img} alt="" />
                        <div className="bg_blur">
                            <img src={blur_square} alt="" />
                        </div>
                    </div>
                </div>
                {/* ********* */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="section_three_title">
                                <h2 className='font-semibold'>Over 25 Years of Trusted Partnership with Leading Tech Companies</h2>
                            </div>
                        </div>
                        {/* ***** */}
                        <div className="section_three_digit pt-10">
                            <div className="counting_digit flex flex-wrap ">
                                {/* ************** */}
                                <div className="count_number">
                                    <p>
                                        {inView && <CountUp end={100} />}<strong>+</strong>
                                    </p>
                                    <p>Projects</p>
                                </div>
                                {/* ********** */}
                                {/* ************** */}
                                <div className="count_number">
                                    <p>
                                        {inView && <CountUp end={50} />} <strong>+</strong>
                                    </p>
                                    <p>Employees</p>
                                </div>
                                {/* ************** */}
                                <div className="count_number">
                                    <p>
                                        {inView && <CountUp end={20} />} <strong>+</strong>
                                    </p>
                                    <p>Countries Served</p>
                                </div>
                                {/* ************** */}
                                <div className="count_number">
                                    <p>
                                        {inView && <CountUp end={50} />} <strong>+</strong>
                                    </p>
                                    <p>Clients</p>
                                </div>
                                {/* ************** */}
                                <div className="count_number">
                                    <p>
                                        {inView && <CountUp end={97} />} <strong>%</strong>
                                    </p>
                                    <p>Retention Rate</p>
                                </div>
                                {/* ********** */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
