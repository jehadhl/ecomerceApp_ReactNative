import axios from "axios";

const api = axios.create({
     baseURL : "http://3.141.119.46" ,
     headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Access-Control-Allow-Origin": "https://api.time2travel.biz",
        "Content-type": "Application/json",
        "Content-Encoding": "gzip, deflate",
     } ,
     withCredentials: true,
})