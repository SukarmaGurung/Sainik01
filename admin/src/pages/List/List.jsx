import React, { useEffect } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from "react-toastify";
import { response } from 'express';

const List = () => {
  const url = 'http://localhost:3000';
  const [list,setList] = useState([]);
  const fetchList = async () =>{
    const response = await axios.get (`${url}/api/product/list`);
  }
  if (response.data.success) {
    setList(response.data.data)
    
  } else {
    toast.error("Error")
  }
}
useEffect(()=>{
  fetchList();

},[])

  return (
    <div>
      
    </div>
  )


export default List
