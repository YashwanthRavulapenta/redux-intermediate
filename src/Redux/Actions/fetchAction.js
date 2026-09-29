import axios from "axios"

export const fetchAPIAction = () => 
    async(yashhh) => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(res.data)
        yashhh({
            type : "GET_PRODUCTS",
            payload : res.data
        })
    
}