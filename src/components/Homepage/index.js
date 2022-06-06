import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import arms from "../assets/arms/index.js";
import hats from "../assets/hats/index.js";
import shoes from "../assets/shoes/index.js";
import './Style.css'
import Accessories from "../Accessories/index.js"


export default function Homepage() {
    const windowdim = useRef(null);

    const userSelectedArms = arms.beer
    const userSelectedHat = hats.spinny
    const userSelectedShoes = shoes.slides

    const userHat = userSelectedHat
    const userArms =userSelectedArms
    const userShoes =  userSelectedShoes

function accessoriesMenu() {
    const menuEl = document.getElementById("storeMenu")
    menuEl.appendChild(<Accessories />)
}


    let isFed = false;
    let [eggCount, setCount] = useState(0);
        if(isFed === false){
            setInterval(() =>{
                setCount(eggCount++);
            }, 5000)
        } else {
            setInterval(() =>{
                setCount(eggCount++);
            }, 7000)
        }
    
    return (
        <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }} ref={windowdim}>
                <p className="egg-counter">Number of eggs: {eggCount}</p>
                <Accessories id="storeMenu">
                <button id="selectedAccessories" onClick={accessoriesMenu}>Change Accesories</button>
                </Accessories>
            {/* <motion.div animate={{ y: 100 }} transition={{ yoyo: Infinity }} id="chickenCont"> */}
            <motion.div id="chickenCont">
                <img src={require("../assets/floppy-bird.png")} alt="yicken" className="chicken" ></img>
                <motion.img drag
                    dragConstraints={windowdim}
                    src={userHat} className="borgor" id="hat">
                </motion.img>
                <motion.img drag
                    dragConstraints={windowdim}
                    src={userShoes} className="borgor" id="shoe">
                </motion.img>
                <motion.img drag
                    dragConstraints={windowdim}
                    src={userArms} className="borgor" id="arm">
                </motion.img>
            </motion.div>
            
        </div>

    )
}
