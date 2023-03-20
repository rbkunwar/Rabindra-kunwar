import React from 'react'
import { Layout } from './Layout';

export const Contact = () => {
  return (
    <Layout>
    <section className="section6 flex" id="contact">
        <h1 className="title">Get In Touch</h1>

        <div className="socials flex">
          <a href="https://www.linkedin.com/in/rabindra-babu-kunwar-81077018b/"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://www.facebook.com/sheamus.kunwar/"><i className="fa-brands fa-facebook"></i></a>
          <a href="https://github.com/rbkunwar"><i className="fa-brands fa-github"></i></a>
          <a href=""><i className="fa-brands fa-twitter"></i></a>
        </div>

        <h1>OR</h1>

        <div className="email-section flex">
          <p>reach out over email</p>
          <div className="email">
            <a href="mailto:xyz@gmail.com">example@gmail.com</a>

            <div className="send">
              <i className="fa-solid fa-paper-plane"></i>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

