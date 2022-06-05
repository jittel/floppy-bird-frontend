import React, { useRef } from "react";
import { motion } from "framer-motion";
import arms from "../assets/arms/index.js";
import hats from "../assets/hats/index.js";
import shoes from "../assets/shoes/index.js";
import './Style.css'


export default function Homepage() {
    const windowdim = useRef(null);
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
                    src={require("../assets/hats/hat_cap.png")} alt="burger stock" className="borgor" id="hat">
                </motion.img>
                <motion.img drag
                    dragConstraints={windowdim}
                    src={require("../assets/shoes/shoes_boots_with_the_fur.png")} alt="burger stock" className="borgor" id="shoe">
                </motion.img>
                <motion.img drag
                    dragConstraints={windowdim}
                    src={require("../assets/arms/arms_yas.png")} alt="burger stock" className="borgor" id="arm">
                </motion.img>
            </motion.div>
        </div>

    )
}