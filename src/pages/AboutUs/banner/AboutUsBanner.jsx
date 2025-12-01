import React from "react";
import aboutImg from "../aboutus.webp";
import "./style.css";
export default function AboutUsBanner() {
  return (
    <>
      <section className="aboutUs">
        <div className="container-fluid">
          <div className="row justify-center  items-center">
            <div className="col-md-7">
                <div className="banner pbl">
<div className="aboutBanner  flex justify-center items-center rounded-3xl">
                <div className="bannerContent ">
                  <h2 className="text-capitalize text-light">About Us</h2>
                  <p className="text-light text-center text-capitalize ">about us</p>
                </div>
              </div>
                </div>
            </div>
            <div className="col-md-5">
              <div className="bannerImage pbr ">
                <img src={aboutImg} className="rounded-3xl" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
