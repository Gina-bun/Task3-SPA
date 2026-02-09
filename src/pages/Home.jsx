import {motion} from "framer-motion"
import { LandingPage } from "../components/LandingPage"

export function Home({theme}){
    return(
        
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.3}}
        >
               <LandingPage theme={theme}/>
        </motion.div>
      
    )
}