import axios from "axios";

const kenzieKars = axios.create({
    baseURL: "https://kenzie-kars.herokuapp.com",
    // timeout: 1000,
    headers: {
        "Content-Type": "application/json"
    }
})

export default kenzieKars