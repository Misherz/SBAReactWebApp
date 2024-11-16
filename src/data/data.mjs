import axios from "axios";


const apiKey = 'f8dacb7fb51e47e0bc07529565a601e8';
const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=';

export async function getData() {
    
    try {
        const response = await axios.get(`${url}${apiKey}`)

        return (response.data)
        
    } catch (err) {
        console.error("Fetching Error:", err);
        
    }
}