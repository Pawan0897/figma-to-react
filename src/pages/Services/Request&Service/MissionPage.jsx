import React from 'react'
import img from "./img/mission.webp"
import "./style.css"
export default function MissionPage() {
  return (
    <>
    <section className='px-50 py-20'>
        <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
            <div className="mission_img">
                <img src={img} alt="" />
            </div>
        </div>
        {/* ******** */}
        <div className="col-md-6 ">
          <div className="mission_text">
 <div className="mission_content">
                <h5 className='capitalize'>
                    agency mission & purpose
                </h5>
                <h2 className='capitalize'>
                    talent strategies that empowers you
                </h2>
            </div>
          </div>
           
        </div>
      </div>
        </div>
    </section>
      
    </>
  )
}
