import React from 'react'
import { Layout } from './Layout';

export const Skills = () => {
  return (
    <Layout>
    <section className="section3 flex">
      <div className="skills-container flex">
        <div className="flex">
          <i className="fa-brands fa-html5"></i>
          <span>HTML</span>
        </div>
        <div className="flex">
          <i className="fa-brands fa-css3"></i> 
          <span>CSS</span>
        </div>
        <div className="flex">
          <i className="fa-brands fa-js"></i> 
          <span>JavaScript</span>
        </div>
        <div className="flex">
          <i className="fa-brands fa-react"></i> 
          <span>React</span>
        </div>
        <div className="flex">
          <i className="fa-solid fa-code-branch"></i> 
          <span>Firebase</span>
        </div>
      </div>
    </section>
    </Layout>
  )
}

