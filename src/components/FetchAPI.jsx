import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAPIAction } from '../Redux/Actions/fetchAction'


const FetchAPI = () => {
    const dispatch  = useDispatch()
    useEffect(()=>{
        dispatch(fetchAPIAction())
    },[])
  return (
    <div>
        FetchAPI
    </div>
  )
}

export default FetchAPI