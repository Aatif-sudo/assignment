import React from 'react'
import './Landing.css'
import image1 from '../../assets/image1.png'
import sample_card from '../../assets/sample_card.jpg'
import experience from '../../assets/experience.jpg'
import { AppstoreTwoTone, CheckCircleTwoTone, CodeTwoTone, ReconciliationTwoTone } from '@ant-design/icons';
import { FaAirbnb, FaDribbble, FaFacebook, FaInstagram, FaPinterest, FaPinterestSquare, FaTwitter } from "react-icons/fa";
import { SiCoinbase, SiNetflix } from "react-icons/si";


function Landing() {
  return (
    <div className='homepage_container'>
      <div className="landing_page">
        <div className="landing_page_text">
          <h1>Welcome to <span>Landkit</span>.
          <br />
           Develop Anything.
          </h1>
          <p>Build a beautiful, modern website with flexible Bootstrap components built from scratch.</p>
          <div className='landing_page_button'>
          <a href="#" className="text-center">View all pages</a>
          <a href="/documentation" className="text-center second_button">Documentation</a>
          </div>
        </div>
        <div className="landing_page_image">
          <img src={image1} alt="landing image" />
         </div>
      </div>
      {/* Features */}
      <div className="feature_row_container">
      <div className="features_row">
        <div className='feature'>
          <CodeTwoTone className='feature_icon'/>
          <h1>Built for developers</h1>
          <p>Landkit is built to make your life easier. Variables, build tooling, documentation, and reusable components.</p>
        </div>
        <div className='feature'>
          <AppstoreTwoTone className='feature_icon'/>
          <h1>Designed to be modern</h1>
          <p>Designed with the latest design trends in mind. Landkit feels modern, minimal, and beautiful.</p>
        </div>
        <div className='feature'>
          <ReconciliationTwoTone className='feature_icon'/>
          <h1>Documentation for everything</h1>
          <p>We've written extensive documentation for components and tools, so you never have to reverse engineer anything</p>
        </div>
      </div>
      </div>
      {/* brands */}
      <section className='brand_row_container'>
        <div className="brand_row">
          <FaAirbnb className='brand_icon'/>
          <SiCoinbase className='brand_icon'/>
          <FaDribbble className='brand_icon'/>
          <FaInstagram className='brand_icon'/>
          <SiNetflix className='brand_icon'/>
          <FaPinterestSquare className='brand_icon'/>
         </div>
      </section>
      <section className='sample_container'>
        <div className="sample_row">
          <div className="sample_card">
            <div className="sample_card_form">
              <img src={sample_card} alt="" className="card_image" />
              <div className="card_body">
                <form action="submit">
                  <input type="text" className="card_body_input" id='cardName' placeholder="Name" />

                  <input type="text" className="card_body_input" id='cardEmail' placeholder="Email" />

                  <input type="text" className="card_body_input" id='cardPassword' placeholder="Password" />

                  <button type='submit'>Download a sample</button>
                </form>
              </div>
            </div>
          </div>
          <div className="sample_text"><h2>The most useful resource <br /><span>ever created for developer.</span></h2>
            <p>
              Using Landkit to build your site means never worrying about designing another page or cross browser compatibility. Our ever-growing library of components and pre-designed layouts will make your life easier.
            </p>
            <div className="sample_features">
              <div className="sample_features_row1">
                <div className='sample_feature'>
                  <CheckCircleTwoTone twoToneColor="#42ba96" />
                  <p>Lifetime Features</p>
                </div>
                <div className='sample_feature'>
                  <CheckCircleTwoTone twoToneColor="#42ba96" />
                  <p>Tons of assets</p>
                </div>
               </div>
              <div className="sample_features_row2">
                <div className='sample_feature'>
                  <CheckCircleTwoTone twoToneColor="#42ba96" />
                <p>Tech Support</p>
               </div>
                <div className='sample_feature'>
                  <CheckCircleTwoTone twoToneColor="#42ba96" />
                  <p>Integration Ready</p>
                </div></div>
            </div>
          </div>
        </div>
      </section>
      <section className='experience_container'>
        <div className="experience_row">
          <div className="experience_text">
            <h2>We have lots of experience <br /><span>building Bootstrap themes.</span></h2>
            <p>We've built well over a dozen Bootstrap themes and sold tens of thousands of copies.</p>
          </div>
          <div className="experience_image">
            <img src={experience} alt="" />
          </div>
        </div>
      </section>
      <section className="footer_container">
        <div className="footer_row">
          <div className="footer_logo_column">
            <h2>Landkit.</h2>
            <p>A better way to build</p>
            <div className="footer_icons">
              <FaFacebook className='footer_icon' />
              <FaInstagram className='footer_icon'/>
              <FaTwitter className='footer_icon'/>
              <FaPinterest className='footer_icon'/>
            </div>
          </div>
          <div className="footer_common_column">
            <h3>Products</h3>
            <ul>
              <li><a href="#">Page Builder</a></li>
              <li><a href="#">UI Kit</a></li>
              <li><a href="#">Style Guide</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </div>
          <div className="footer_common_column">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Style Guide</a></li>
              <li><a href="#">Page Builder</a></li>
              <li><a href="#">UI Kit</a></li>
            </ul>
          </div>
          <div className="footer_common_column">
            <h3>Connect</h3>
            <ul>
              <li><a href="#">Page Builder</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">UI Kit</a></li>
              <li><a href="#">Style Guide</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Page Builder</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </div>
          <div className="footer_common_column">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Page Builder</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing
