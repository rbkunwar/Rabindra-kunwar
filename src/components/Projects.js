import React from 'react'
import mom from "../pics/mom.avif";
import dad from "../pics/download.jpeg";
import react1 from "../pics/react.png";
import { Layout } from './Layout';

export const Projects = () => {
  return (
    <Layout>
    <section className="section4 flex" id="projects">
        <h1 className="title">My Recent Work</h1>

        <div className="projects-container grid">
          <div className="project-card flex">
            <div className="top">
              <img src={react1} alt="img" />
            </div>

            <div className="bottom">
              <p>April 15, 2022</p>
              <p>Full-Stack E-commerse website development Built Using React & Firebase</p>
            </div>
          </div>
          <div className="project-card flex">
            <div className="top">
              <img src={dad} alt="img" />
            </div>

            <div className="bottom">
              <p>April 1, 202</p>
              <p>Movie api Using React & Firebase</p>
            </div>
          </div>
          <div className="project-card flex">
            <div className="top">
              <img src={mom} alt="img" />
            </div>

            <div className="bottom">
              <p>March 1, 2023</p>
              <p>Expense tracker using React & Firebase</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

