import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import borgor from "../assets/borgor.png";
import './Style.css'


export default function Homepage(){
    const windowdim = useRef(null);
    const [eggCount, setCount] = useState(0);
        setInterval(() =>{
            setCount(eggCount + 1);
        }, 5000)
   return(
    <div style={{width: "100vw", height: "100vh", overflow: "hidden"}} ref={windowdim}>
        <motion.div animate={{ y: 100 }} transition={{ yoyo: Infinity }}>
            <img src={require("../assets/yicken.png")} alt="yicken"></img>
        </motion.div>
            <motion.img drag 
        dragConstraints={windowdim}
         src={borgor} alt="burger stock" className="borgor"></motion.img>
        <p className="egg-counter">Number of eggs: {eggCount}</p>
    </div>
   )
}

