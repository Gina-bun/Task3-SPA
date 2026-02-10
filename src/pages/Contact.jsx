import { motion } from "framer-motion";
import "./Contact.css";
export function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
     
      <div className="contact-container">
        <div className="contact">
           <div className="tilt contact-bg"></div>
          <h1 className="contact-title">𑣲Come try our frosty treats⟢</h1>
          <div className="contact-links">
            <p>📍Location: Somewhere sweet & cozy</p>
            <p>📞Phone: +321 678 985</p>
            <p>✉️Email:hello@milkshakepoint.com</p>
          </div>
        </div>

        <p className="divider text-center py-6.5 pt-9">˚₊‧꒰ა ♡ ໒꒱ ‧₊˚</p>

       
        <div className="socials">
          <div className="tilt social-bg"></div>
          <h1 className="contact-title">Keep up with our flavours:</h1>
          <div className="social-links">
            <p>📷 Instagram-@milkshakepoint</p>
            <p>【ꚠ】TikTok-@milkshakepoint</p>
            <p>▶️YouTube-@milkshakepoint</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
