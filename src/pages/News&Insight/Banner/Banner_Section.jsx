
import img from "../img/blog-skill-career-growth-banner.webp"
export default function Banner_Section() {
  return (
    <>
      <section className="pbr pbl">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="news_bannwer">
                {/* ************************* */}
                <div className="heading">
                  <h2>
                    Why soft skills are key to career growth in today’s market
                  </h2>
                  <p>
                    Pawan-Dev-017 | November 20, 2024 | Case Study | 3.5 min
                  </p>
                  <hr />
                  <h5>Get the latest insights, market trends & inspiration!</h5>
                </div>
                {/* ************************ */}
              </div>
            </div>
            <div className="col-md-6">
                <div className="banner_img">
                    <img src={img} alt="" />
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
