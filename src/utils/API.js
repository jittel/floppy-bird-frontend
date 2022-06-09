//DEVELOP
const BASE_URL = "http://localhost:3001"
//PROD
// const BASE_URL="https://floppy-bird-back.herokuapp.com"

module.exports = {
    getAllUsers: () => {
        return fetch(`${BASE_URL}/api/users`).then(res => res.json())
    },
    getOneUser: userId => {
        return fetch(`${BASE_URL}/api/users/${userId}`).then(res => res.json())
    },
    verify: token => {
        return fetch(`${BASE_URL}/api/users/verifyToken`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then(res => res.json())
    },
    login: userData => {
        return fetch(`${BASE_URL}/api/users/login`, {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    },
    signup: userData => {
        return fetch(`${BASE_URL}/api/users`, {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    },
    getAllHats: () => {
        return fetch(`${BASE_URL}/api/categories/1`)
            .then((res) => {
                return res.json();
            })
    },
    updateEggs: (userId, eggs) => {
        return fetch(`${BASE_URL}/api/users/${userId}`, {
            method:"PUT",
            body: eggs
        }).then(()=>{
            console.log("data updated in api")
        })
    }
}