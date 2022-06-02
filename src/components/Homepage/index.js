import React from "react";
import { motion } from "framer-motion";


export default function Homepage(){
   return(
    <motion.div animate={{ y: 100 }} transition={{ yoyo: Infinity }}>
        <img src={require("../assets/yicken.png")} alt="yicken"></img>
    </motion.div>
   )
}