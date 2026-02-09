import { motion } from "framer-motion"
export function Contact(){
    return(
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.3}}
        >
              <h1>Contact Page</h1>
        </motion.div>
      
    )
}