import img from "../../AboutUs/img/aboutus.webp";
import "./style.css"
export default function ServiceBanner() {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7">
                <div className="service pbl">
 {/* *********************** */}
              
              <div className="service_banner rounded-3xl flex justify-center items-center">
                <div className="banner_content">
                  <h2 className="text-light">Our Services</h2>
                  <p className="text-light text-center">Our services</p>
                </div>
              </div>  </div>
              {/* *********************** */}
            </div>
            <div className="col-md-5">
              <div className="banner_img pbr">
                <img src={img} alt="" className="rounded-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
