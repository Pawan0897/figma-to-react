import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import "./style.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import frame1 from "./img/frame1.png";
import frame2 from "./img/frame2.png";
import frame3 from "./img/frame3.png";
import frame4 from "./img/frame4.png";
export default function BlogSection() {
  const blogs = [
    {
      title: "Revolutionizing E-commerce Content Re-platforming",
      readTime: "6 min read",
      hoverImage: frame2,
    },
    {
      title: "Build Your 10X Product with GenAI",
      readTime: "6 min read",
      hoverImage: frame1,
    },
    {
      title: "Contentful 101: Capabilities, Advantages",
      readTime: "6 min read",
      hoverImage: frame2,
    },
    {
      title: "Winning Data-Driven Personalization With CMS",
      readTime: "6 min read",
      hoverImage: frame3,
    },
    {
      title: "Another Blog Example",
      readTime: "6 min read",
      hoverImage: frame4,
    },
  ];

  const [hoveredSlide, setHoveredSlide] = useState(null);

  return (
    <>
      <section className="px-20 blog_section">
        <div className="container-fluid ">
          <div className="blog_slider">
            <div className="blog_title">
              <p className="capitalize font-semibold">our blog</p>
              <h2>
                Latest <span>Insights</span>
              </h2>
            </div>
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              freeMode={true}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                375: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                425: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1440: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              loop={true}
              // autoplay={true}
              modules={[FreeMode, Pagination, Navigation, Autoplay]}
              className="mySwiper blog_swiper"
              id="blog_swiper"
            >
              {/* ************************** swiper >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
              {blogs?.map((item, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    onMouseEnter={() => setHoveredSlide(index)}
                    onMouseLeave={() => setHoveredSlide(null)}
                  >
                    <div
                      className="card p-4 text-start h-20 shadow-xl border-0 relative"
                      style={{
                        backgroundImage:
                          hoveredSlide === index
                            ? `url(${item?.hoverImage})`
                            : "none",
                        color: hoveredSlide === index ? "#fff" : "#000",
                        boxShadow:
                          hoveredSlide === index
                            ? ""
                            : "0px 0px 9px 0px #dddddd",
                        backgroundSize: "100%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top center",
                      }}
                    >
                      <div className="blog_time">
                        <p>6 min read</p>
                      </div>
                      {/* ********* */}
                      <div className="blog_body">
                        <h2>
                          Revolutionizing E-commerce Content Re-platforming: How
                          Generative AI Can Alleviate Key Pain Points
                        </h2>
                      </div>
                      {/* **** */}
                      <div className="blog_button absolute bottom-5  ">
                        <button className="text-center border rounded">
                          Read Blog
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* ****************** */}

              {/* ************** */}
              <div className="prev absolute flex justify-center items-center bg_blue text_white bottom-0 z-10">
                <FaArrowLeft />
              </div>
              <div className="next  absolute flex justify-center items-center bg_blue text_white z-10">
                <FaArrowRight />
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
