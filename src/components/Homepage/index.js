import React, { useEffect, useRef, useState } from "react";
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



    // let isFed = false;
    let [eggCount, setCount] = useState(0);
        // if(isFed === false){
            useEffect(() => {
                setTimeout(() =>{
                console.log('time')
                setCount(eggCount + 1);
            }, 5000)
        }, [eggCount])
        // } else {
        //     setTimeout(() =>{
        //         setCount(eggCount++);
        //     }, 7000)
        // }
    
    return (
        <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }} ref={windowdim}>
                <p className="egg-counter">Number of eggs: {eggCount}</p>
                <h2 className="chickName">Say hello to "name here"</h2>
                
            {/* <motion.div animate={{ y: 100 }} transition={{ yoyo: Infinity }} id="chickenCont"> */}
            <motion.div id="chickenCont">
                <img src={require("../assets/floppy-bird.png")} alt="yicken" className="chicken" ></img>
                <motion.img drag
                    dragConstraints={windowdim}
                    initial={{ y: -500 }}
                    src={userHat} className="draggable" id="hat">
                </motion.img>
                <motion.img drag
                    dragConstraints={windowdim}
                    initial={{ y: -285 }}
                    src={userShoes} className="draggable" id="shoe">
                </motion.img>
                <motion.img drag
                    dragConstraints={windowdim}
                    initial={{ y: -600 }}
                    src={userArms} className="draggable" id="arm">
                </motion.img>
            </motion.div>
            
        </div>

    )
}

{/* <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }} ref={windowdim}>
                <p className="egg-counter">Number of eggs: {eggCount}</p>
                <h2 className="chickName">Say hello to "name here"</h2>
            {/* <motion.div animate={{ y: 100 }} transition={{ yoyo: Infinity }} id="chickenCont"> */}
            // <motion.div id="chickenCont">
            //     <img src={require("../assets/floppy-bird.png")} alt="yicken" className="chicken" ></img>
            //     <motion.img
            //         initial={{ y: -500 }}
            //         drag
            //         dragConstraints={windowdim}
            //         src={userHat} className="draggables" id="hat">
            //     </motion.img>
            //     <motion.img 
            //         initial={{ y: -290 }}
            //         drag
            //         dragConstraints={windowdim}
            //         src={userShoes} className="draggables" id="shoe">
            //     </motion.img>
            //     <motion.img 
            //     initial={{ y: -600 }}
            //         drag
            //         dragConstraints={windowdim}
            //         src={userArms} className="draggables" id="arm">
            //     </motion.img>
            // </motion.div> */}