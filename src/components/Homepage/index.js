import React from "react";
import { motion, useDragControls } from "framer-motion";


export default function Homepage(){

   return(
    <div>
        <motion.div animate={{ y: 100 }} transition={{ yoyo: Infinity }}>
            <img src={require("../assets/yicken.png")} alt="yicken"></img>
        </motion.div>
        <motion.div drag 
        dragConstraints={{ left: 0, top: 500, right: 2000, bottom: 500 }}
        >
            <img src={require("../assets/borgor.png")} alt="burger stock"></img>
        </motion.div>
    </div>
    
   )
}