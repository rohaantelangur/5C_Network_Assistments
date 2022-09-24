import axios from 'axios'
import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from './actionType';

export const getData = (userName)=>(dispatch)=>{
    dispatch({ type: GET_DATA_REQUEST });
    axios.get(`https://api.github.com/users/${userName}/repos`).then((res)=>{
    dispatch({ type: GET_DATA_SUCCESS, payload:res.data });    
    console.log(res.data,"react-redux");
    }).catch((err)=>{
    dispatch({ type: GET_DATA_FAILURE });    
    console.log(err);
    })
}