import React, { useRef } from "react";
import { motion, useDragControls } from "framer-motion";
import borgor from "../assets/borgor.png";


export default function Homepage(){
    const windowdim = useRef(null);
   return(
    <div style={{width: "100vw", height: "100vh", overflow: "hidden"}} ref={windowdim}>
        <motion.div animate={{ y: 100 }} transition={{ yoyo: Infinity }}>
            <img src={require("../assets/yicken.png")} alt="yicken"></img>
        </motion.div>
            <motion.img drag 
        dragConstraints={windowdim}
         src={borgor} alt="burger stock"></motion.img>
    </div>
    
   )
}