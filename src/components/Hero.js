import React from 'react'
import user from "../pics/1234.png"
import resume from "../pics/RBK-RESUME.docx"
import { Layout } from './Layout'

export const Hero = () => {
  return (
    <Layout>
     <section className="section1 grid">
        <div className="left flex">
          <img src={user} alt="profile pic" />
      </div>
      <div className="right flex">
          <h2 className="name">I am a Software Developer <span className="tag"></span></h2>
        <button>
          <a href={resume} download={true}
            >Download CV <span><i className="fa-solid fa-download"></i></span></a>
        </button>
      </div>
    </section>
    <section className="section2">
      <div className="info-container flex">
        <div className="info-lists flex">
          <div className="info-content flex">
            <div className="icon-container flex">
              <i className="fa-solid fa-award"></i>
            </div>

            <span>
              <h5>IT</h5>
              <p>Graduate</p>
            </span>
          </div>

          <div className="info-divider"></div>

          <div className="info-content flex">
            <div className="icon-container flex">
              <i className="fa-solid fa-award"></i>
            </div>

            <span>
              <h5>5 + Projects</h5>
              <p>Completed</p>
            </span>
          </div>

          <div className="info-divider"></div>

          <div className="info-content flex">
            <div className="icon-container flex">
              <i className="fa-solid fa-award"></i>
            </div>

            <span>
              <h5>1 + Year</h5>
              <p>Job Experience</p>
            </span>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  )
}
