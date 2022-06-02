import React from "react";
import { motion, useDragControls } from "framer-motion";


export default function Homepage(){
    const dragControls = useDragControls();

    function startDrag(event) {
        dragControls.start(event, { snapToCursor: false })
      }

   return(
    <div>
        <motion.div animate={{ y: 100 }} transition={{ yoyo: Infinity }}>
            <img src={require("../assets/yicken.png")} alt="yicken"></img>
        </motion.div>
        <motion.div onPointerDown={startDrag} drag="x" dragControls={dragControls}>
            <img src={require("../assets/borgor.png")} alt="burger stock"></img>
        </motion.div>
    </div>
    
   )
}