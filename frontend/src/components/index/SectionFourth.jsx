
export default function SectionFourth() {
    return (
        <>
            <section className='sectionFourth mt-10'>
                <div className="container section_fourth_bg  shadow">
                    <div className="row px-20 items-center">
                        <div className="col-md-8 col-sm-12">
                            <div className="section_fourth_content   flex items-center justify-between">
                                <div className="section_fourth_text">
                                    <h2 className="text-light">
                                        Harness Global Expertise
                                    </h2>
                                    <p className="text-light">Transform your ideas into reality with our expert web and app development.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">

                            {/* ************ buton animation */}
                            <div className="section_fourth_button flex justify-end">
                                <button class="button_shine">
                                    <span class="label">+ Add to card</span>
                                    <span class="gradient-container">
                                        <span class="gradient"></span>
                                    </span>
                                </button>
                            </div>

                            {/* **************** */}


                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}
