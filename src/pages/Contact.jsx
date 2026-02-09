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
          <h1>𑣲Come try our frosty treats⟢</h1>
          <p>📍Location: Somewhere sweet & cozy</p>
          <p>📞Phone: +321 678 985</p>
          <p>✉️Email:hello@milkshakepoint.com</p>
        </div>

        <p className="divider text-center">˚₊‧꒰ა ♡ ໒꒱ ‧₊˚</p>

        <div className="socials">
          <h1>Keep up with our flavours:</h1>
          <p>📷 Instagram-@milkshakepoint</p>
          <p>【ꚠ】TikTok-@milkshakepoint</p>
          <p>▶️YouTube-@milkshakepoint(Yes we do asmr)</p>
        </div>
      </div>
    </motion.div>
  );
}
