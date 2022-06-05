import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import arms from "../assets/arms/index.js";
import hats from "../assets/hats/index.js";
import shoes from "../assets/shoes/index.js";
import './Style.css'


export default function Homepage() {
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
    function changeHat() {
        var armEl = document.getElementById('arm')
        armEl.src=arms.basketball
    }
    return (
        <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }} ref={windowdim}>
                <button className="changeHat" onClick={changeHat}>Change Arms</button>
            {/* <motion.div animate={{ y: 100 }} transition={{ yoyo: Infinity }}> */}
            <motion.div>
                <img src={require("../assets/floppy-bird.png")} alt="yicken" className="chicken"></img>
                <motion.img drag
                    dragConstraints={windowdim}
                    src={hats.crown} alt="burger stock" className="borgor" id="hat">
                </motion.img>
                <motion.img drag
                    dragConstraints={windowdim}
                    src={shoes.basketball_shoes} alt="burger stock" className="borgor" id="shoe">
                </motion.img>
                <motion.img drag
                    dragConstraints={windowdim}
                    src={arms.basketball} alt="burger stock" className="borgor" id="arm">
                </motion.img>
            </motion.div>
        </div>

    )
}
