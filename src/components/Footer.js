import React from 'react'

export const Footer = () => {
  return (
    <>
    <footer>
        <div className="footer-container flex">
          <div className="footer-top flex">
            <div className="flex">
              <h3>Links</h3>
              <ul className="flex">
                <li>Home</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="flex">
              <h3>External Links</h3>
              <ul className="flex">
                <li><a href="https://www.linkedin.com/in/rabindra-babu-kunwar-81077018b/">LinkedIn</a></li>
                <li><a href="https://github.com/rbkunwar">GitHub</a></li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom flex">
            <p>@2022 | All rights reserved.</p>
          </div>
        </div>
      </footer>
      <div className="scroll-to-top">
        <a href="#" className="scroll-btn">
          <i className="fa-solid fa-chevron-up"></i>
        </a>
      </div>
    </>
  )
}

