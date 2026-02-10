import { motion } from "framer-motion";
import AboutImg from "../assets/about.jpeg";
import "./About.css";

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="about-container">
        <div className="about-img">
          <img src={AboutImg} alt="" />
        </div>

        <div className="about-content">
         <div className="about-section">
           <h1 className=" title" id="about-title">Our Story</h1>
          <p className="about-text">
            At Milkshake Point, we believe every sip should bring a smile. We
            craft our shakes with fresh ingredients, colorful flavors, and a
            little sprinkle of fun. From classic vanilla to wild fruity
            creations, there’s a shake for every dreamer!
          </p>
         </div>

         <p className="divider text-center py-4.5">˚₊‧꒰ა ♡ ໒꒱ ‧₊˚</p>

          {/* funfacts */}
          <div className="fun-facts">
            <h1 className="title" id="funfact-title">Fun facts⋆˚࿔</h1>
            <div className="funfact-text flex flex-col gap-1.5 px-[1em] text-justify">
              <p>
                ✨Our best milkshake was created when our cat picked a random
                flavour combo from folded papers!
              </p>
              <p>✨Some flavours exist just because we felt like it</p>
              <p>✨Our best ideas happen at 2 AM</p>
              <p>
                ✨Free and customizable milkshakes for customers on their
                birthdays!
              </p>
              <p>✨We believe colours taste better</p>
              <p>✨We have thought of making a veggie milkshake before</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
