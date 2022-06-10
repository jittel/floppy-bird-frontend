import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import arms from "../assets/arms/index.js";
import hats from "../assets/hats/index.js";
import shoes from "../assets/shoes/index.js";
import egg from "../assets/egg.png";
import wheat from "../assets/wheat.jpg";
import './Style.css'
import Accessories from "../Accessories/index.js"
import API from '../../utils/API';
import {
    useNavigate
} from "react-router-dom";


export default function Homepage(props) {
    let navigate = useNavigate();

    const savedToken = localStorage.getItem("token");
    if (!savedToken) {
        navigate('/login', { replace: true })
    }

    const windowdim = useRef(null);

    const userSelectedArms = arms.beer
    const userSelectedHat = hats.spinny
    const userSelectedShoes = shoes.slides

    const userHat = userSelectedHat
    const userArms = userSelectedArms
    const userShoes = userSelectedShoes

    let [userData, setUserData] = useState({
        id: '',
        username: '',
        eggs: props.loggedInData.eggs,
        chicken: {
            name: ''
        }
    });
    useEffect(() => {
        const lsData = window.localStorage.getItem("user data");
        API.getOneUser(props.loggedInData.id).then((data) => {
            // console.log("data data", data)
            if (lsData) {
                setUserData(JSON.parse(lsData))
            } else {
                setUserData({
                    id: data.id,
                    username: data.username,
                    eggs: data.eggs,
                    chicken: {
                        name: data.Chicken.chicken_name
                    }
                })
            }
        })

    }, [])

    useEffect(() => {
        if (userData) {
            window.localStorage.setItem("user data", JSON.stringify(userData))
        }
    }, [userData])

    const spawnEgg = (event) => {
        event.target.src = "";
    }

    const [isToggled, setIsToggled] = useState(false)

    // let isFed = false;
    // let [eggCount, setCount] = useState(0);
    // if(isFed === false){
    useEffect(() => {
        setTimeout(() => {
            // console.log('time')
            setUserData(prevState => ({
                ...prevState,
                eggs: userData.eggs + 1
            }))
            document.getElementById("egggg").setAttribute("src", egg)
        }, 50000)
        API.updateEggs(userData.id, userData.eggs).then(() => {
            // console.log("data updated")
        })
      }, [userData.eggs])

  
    const peckAnim = {
        init: {
            rotate: 0
        },
        anim: {
            rotate: [0, 10, -90, -30, -90, 0]
        },
        transition: {
            delay: 2
        }
    }
        
    const foodAnim = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            x: 350,
            y: -500,
            transistion: {duration: 0.75, type: 'spring', bounce: 0.25}
            
        }
    }

    console.log("USER DATA", userData)
    return (
        <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }} ref={windowdim}>
            
            <button className="homeBtn" onClick={() => setIsToggled(isToggled => !isToggled)}>Feed!</button>
            
            <div className="eggDiv">
                <p className="egg-counter">Egg Count:  {userData.eggs}</p>
                
                <img id="egggg" src="" onClick={spawnEgg}></img>
            </div>
            
            <h2 className="chick-name">Say hello to: {userData.chicken.name}</h2>
            

            {/* <motion.div animate={{ y: 100 }} transition={{ yoyo: Infinity }} id="chickenCont"> */}
            <motion.div variants={peckAnim} animate={!isToggled ? "init" : "anim"} transistion="transition" id="chickenCont">
                <img src={require("../assets/floppy-bird.png")} alt="yicken" className="chicken" ></img>
                <motion.img
                    initial={{ y: -500 }}
                    src={userHat} className="draggables" id="hat">
                </motion.img>
                <motion.img
                    initial={{ y: -285 }}
                    src={userShoes} className="draggables" id="shoe">
                </motion.img>
                <motion.img
                    initial={{ y: -600 }}
                    src={userArms} className="draggables" id="arm">
                </motion.img>
            </motion.div>
            <motion.img id="wheaties" src={wheat} variants={foodAnim} animate={!isToggled ? "hidden" : "visible"} ></motion.img>

        </div>

    )

}
