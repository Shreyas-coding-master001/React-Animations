import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import hero from "../../assets/hero.png";
import Cards from './components/Cards';
import "./Motions.scss";


const Motion = () => {
  const { scrollYProgress } = useScroll(

  );

  return (
    <div id='First-Landing'>
      <header>
          <div className="header-title">
            <h1>Shreyas Motion Web</h1>
          </div>
          <div className="nav-list">
            <ul>
              <li>Home</li>
              <li>Projects</li>
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <ul>
              <li></li>
              <li></li>
              <li>EN</li>
            </ul>
          </div>
      </header>
      <main>
        <motion.div className="image-container"
          initial = {{
            translateX : "-50%",
            scale : 0.2,
            opacity : 1
          }}
          style={{
            scale : useTransform(
              scrollYProgress,
              [0, 0.6],
              [0.2, 3]
            ),
            opacity : useTransform(
              scrollYProgress,
              [0.6,1],
              [0.6,0]
            )
          }}

        >
          <img src={hero} alt="Background Image" />
        </motion.div>
        <motion.section
          style={{
             y : useTransform(scrollYProgress, [0,0.4], [100, -120]),
          }}
          className='Introduction'
        > 
          <h3>Enough with average</h3>
          <h2>your website
            <span> can do more</span>
          </h2>
          <p>
            <span>For brands that want to appear online</span>
            <span>just as high-end as they truly are.</span>
          </p>

          <button>Start Project</button>

          <motion.div 
            className="text-bottom"
            >
            <h4>Scroll to Explore</h4>
          </motion.div>
        </motion.section>

        <motion.section
          className='about-me'
          style={{
            y : useTransform(
              scrollYProgress,
              [0.6, 0.8],
              [0, 100]
            )
          }}
        >
          <motion.h2
            initial = {{ 
              scale : 0,
              opacity : 0,
            }}
            style={{
              scale : useTransform(
                scrollYProgress,
                [0.8, 1],
                [0, 1]
              ),
              opacity : useTransform(
                scrollYProgress,
                [0.8, 1],
                [0, 1]
              )
            }}
          >
            See For Yourself
          </motion.h2>

          <div className="cards">
            <Cards />
          </div>
        </motion.section>
      </main>
    </div>
  )
}

export default Motion
