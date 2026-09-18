import { motion, useScroll } from 'motion/react'
import React from 'react'

const Cards = () => {
    const cards = [
        {
            id : 1,
            text : "Performing FreeLancing from year, worked with school hkgidwani and company Instec-India"
        },
        {
            id : 2,
            text : "Perform Intership at Sapphire Infocom Pvt 3 months"
        },
        {
            id : 3,
            text : "Continously Learning new things and growing worked with playwriths, cheerio, ether.js, GenAI ... and still learning"
        },
        
        
    ]

    const {scrollYProgress} = useScroll();

  return (
    <motion.div
        
    >
      {cards.map((card) => {
        return(
            <div className="card" key={card.id}>
                <span>&#960</span>
                <p>{card.text}</p>
            </div>
        )
      })}
    </motion.div>
  )
}

export default Cards;
