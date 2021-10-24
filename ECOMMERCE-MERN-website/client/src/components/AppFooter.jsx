import React from 'react'

const AppFooter = () => {
    return (
        <div className='footer_div'>
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="footer_">
                <h5 className="white-text">About</h5>
                <p className="footer_about">This is an e-commerce website for selling laptops online.</p>
              </div>
              <div className="connect_div">
                <h5 className="white-text">Connect</h5>
                <ul>
                  <div className="social-links">
                    <a href="https://github.com/DEBARYA76"><i className="fab fa-github"></i></a>
                    <a href="https://twitter.com/DEBARYA"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=10001285958770"><i className="fab fa-facebook-square"></i></a>
                    <a href="https://www.instagram.com/arya_monochrome/"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/Debarya Pal/"><i className="fab fa-linkedin-in"></i></a>
                </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container_footer">
            © 2021 All rights reserved
            </div>
          </div>
        </footer> 
        </div>
    )
}

export default AppFooter
