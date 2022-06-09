import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import arms from "../assets/arms/index.js";
import hats from "../assets/hats/index.js";
import shoes from "../assets/shoes/index.js";
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
        // console.log("data data", props.loggedInData)
        API.getOneUser(props.loggedInData.id).then((data) => {
            // console.log("data data", data)
            if (data.username) {
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

    let [eggCount, setCount] = useState(props.loggedInData.eggs);
    useEffect(() => {
        setTimeout(() => {
            console.log('time')
            setCount(eggCount + 1);
            setUserData(prevState => ({
                ...prevState,
                eggs: userData.eggs + 1
            }))
        }, 5000)
        API.updateEggs(userData.id, userData.eggs).then(() => {
            console.log("data updated")
        })
    }, [eggCount])

    console.log("USER DATA", userData)
    return (
        <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }} ref={windowdim}>
            <p className="egg-counter">Number of eggs: {eggCount}</p>
            <h2 className="chick-name">Say hello to: {userData.chicken.name}</h2>

            {/* <motion.div animate={{ y: 100 }} transition={{ yoyo: Infinity }} id="chickenCont"> */}
            <motion.div animate={{ rotate: [-90, 0, -90, 0] }} transistion={{ type: 'spring', bounce: 2, }} id="chickenCont">
                <img src={require("../assets/floppy-bird.png")} alt="yicken" className="chicken" ></img>
                <motion.img drag
                    dragConstraints={windowdim}
                    initial={{ y: -500 }}
                    src={userHat} className="draggables" id="hat">
                </motion.img>
                <motion.img drag
                    dragConstraints={windowdim}
                    initial={{ y: -285 }}
                    src={userShoes} className="draggables" id="shoe">
                </motion.img>
                <motion.img drag
                    dragConstraints={windowdim}
                    initial={{ y: -600 }}
                    src={userArms} className="draggables" id="arm">
                </motion.img>
            </motion.div>

        </div>

    )
}
