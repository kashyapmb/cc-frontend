import axios from "axios";


const getDoubtDetails = async(id) => {
    axios.defaults.withCredentials = true
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}//doubt/${id}`);
    return response.data;
}

const getRelatedDoubts = async() => {
    axios.defaults.withCredentials = true
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/relatedDoubts`);
    return response.data;
}

const getSimilarDoubts = async(id)=>{
    axios.defaults.withCredentials = true
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/similarDoubts/${id}`);
    return response.data
}

const doubtService = { getRelatedDoubts, getDoubtDetails, getSimilarDoubts };

export default doubtService;