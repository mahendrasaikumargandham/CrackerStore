import axios from "axios";

const instance = axios.create({
    baseURL: "https://us-central1-diwalistoreonline.cloudfunctions.net/api"
    // baseURL: "http://localhost:5001/diwalistoreonline/us-central1/api"
});

export default instance;