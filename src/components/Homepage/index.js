import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import arms from "../assets/arms/index.js";
import hats from "../assets/hats/index.js";
import shoes from "../assets/shoes/index.js";
import egg from "../assets/egg.png";
import wheat from "../assets/wheat.png";
import './Style.css'
// import Accessories from "../Accessories/index.js"
import API from '../../utils/API';
import {
    useNavigate
} from "react-router-dom";


export default function Homepage(props) {
    let navigate = useNavigate();
    let [hatLink, setHatLink] = useState('')
    let [shoeLink, setShoeLink] = useState('')
    let [itemLink, setItemLink] = useState('')

    const savedToken = localStorage.getItem("token");
    if (!savedToken) {
        navigate('/login', { replace: true })
    }

    const windowdim = useRef(null);

    // const userID = JSON.parse(localStorage.getItem("user data"))


    let [userData, setUserData] = useState({
        id: props.loggedInData.id,
        username: props.loggedInData.username,
        eggs: props.loggedInData.eggs,
        chicken: {
            name: props.loggedInData.chicken.name
        }
    });
    useEffect(() => {
        API.getOneUser(props.loggedInData.id).then((res) => {
            return res.json();
        }).then(data => {
            // console.log("LOGIN USER DATA", data)
            setUserData({
                id: data.id,
                username: data.username,
                eggs: data.eggs,
                chicken: {
                    name: data.chicken.name
                }
            })
        })

    }, [])

    useEffect(() => {
        if (userData) {
            window.localStorage.setItem("user data", JSON.stringify(userData))
        }
    }, [userData])

    React.useEffect(() => {
        async function getHat() {
            API.getOneUser(props.loggedInData.id).then(res => {
                console.log(res)
                return res.json()
            }).then(data => {
                setHatLink(data.Chicken.equip_hats);
            })
        }
        getHat().then(() => console.log("got chicken hat link"))
    }, [])
    React.useEffect(() => {
        async function getShoe() {
            API.getOneUser(props.loggedInData.id).then(res => {
                console.log(res)
                return res.json()
            }).then(data => {
                setShoeLink(data.Chicken.equip_shoes);
            })
        }
        getShoe().then(() => console.log("got chicken shoe link"))
    }, [])
    React.useEffect(() => {
        async function getItem() {
            API.getOneUser(props.loggedInData.id).then(res => {
                console.log(res)
                return res.json()
            }).then(data => {
                setItemLink(data.Chicken.equip_arms);
            })
        }
        getItem().then(() => console.log("got chicken item link"))
    }, [])

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
        }, 10000)
        API.updateEggs(userData.id, userData.eggs).then(() => {
            console.log("data updated")
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
            transistion: { duration: 0.75, type: 'spring', bounce: 0.25 }

        }
    }

    // if (!hatLink) {
    //     return <div>Loading</div>
    // } else {
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
                    src={hatLink} className="draggables" id="hat">
                    {/* src={chicken.equip_hats} */}
                </motion.img>
                <motion.img
                    initial={{ y: -285 }}
                    src={shoeLink} className="draggables" id="shoe">
                </motion.img>
                <motion.img
                    initial={{ y: -600 }}
                    src={itemLink} className="draggables" id="arm">
                </motion.img>
            </motion.div>
            <motion.img id="wheaties" src={wheat} variants={foodAnim} animate={!isToggled ? "hidden" : "visible"} ></motion.img>

        </div>

    )

}
// }