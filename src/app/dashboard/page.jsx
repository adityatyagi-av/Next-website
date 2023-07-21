"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'



const Dashboard = () => {
  const [data,setData]=useState([]);
  const [err,setErr]=useState(false);
  const [isLoading,setIsLoading]=useState(false);

  useEffect(()=>{
    async function getData() {
      setIsLoading(true)
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
     
      if (!res.ok) {
       setErr(true)
      }
     const items= await res.json()
      setData(items)
      setIsLoading(false)
    };
    getData()
  },[]);

  console.log(data)
  return (

    <div className={styles.container}>
      Dashboard
    </div>
  )
}

export default Dashboard
