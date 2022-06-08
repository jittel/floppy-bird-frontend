import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import arms from "../assets/arms/index.js";
import hats from "../assets/hats/index.js";
import shoes from "../assets/shoes/index.js";
import './Style.css'
import Accessories from "../Accessories/index.js"
import API from '../../utils/API';
// import {
//     useNavigate
//   } from "react-router-dom";


export default function Homepage(props) {
    // let navigate = useNavigate();

    // const savedToken = localStorage.getItem("token");
    // if (!savedToken) {
    //     navigate('/homepage', {replace:true})
    // }

    // const userData = localStorage.getItem("user data");
    // let userObj = JSON.parse(userData);

    const windowdim = useRef(null);

    const userSelectedArms = arms.beer
    const userSelectedHat = hats.spinny
    const userSelectedShoes = shoes.slides

    const userHat = userSelectedHat
    const userArms = userSelectedArms
    const userShoes = userSelectedShoes

    // let [loggedInData, setLoggedInData] = useState();
    // useEffect(()=> {
    //     setLoggedInData(userObj)
    //     console.log("LOGGED IN DATA", loggedInData)
    // }, [])

    let [userData, setUserData] = useState({
        username: '',
        eggs: 0,
        chicken: {
            name: ''
        }
    });
    useEffect(() => {
        console.log(props.loggedInData)
        API.getOneUser(props.loggedInData.id).then((data) => {
            if (data.username) {
                setUserData({
                    username: data.username,
                    eggs: data.eggs,
                    chicken: {
                        name: data.Chicken.chicken_name
                    }
                })
                console.log(data)
            }
        })
    }, [])
    console.log(userData)

    // let isFed = false;
    let [eggCount, setCount] = useState(0);
    // if(isFed === false){
    useEffect(() => {
        setTimeout(() => {
            console.log('time')
            setCount(eggCount + 1);
            setUserData(prevState=>({
                ...prevState,
                eggs:userData.eggs+1
            }))
            // console.log(userObj.eggs)
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
