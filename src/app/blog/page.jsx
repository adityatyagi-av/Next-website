import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts')
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}
 

const Blog = async () => {
  const data =await getData()
  
  return (
    
    <div className={styles.mainContainer}>
      {
        data.map((item)=>{
          
          return(
            <Link key={item.__id} href={`blog/${item._id}`} className={styles.container}>
            <div className={styles.imageContainer}>
            <Image
            src={item.image}
            width={400}
            height={250}
            className={styles.image}
            alt='blog image'/> 
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </Link>
          );
        })
      }
     
      
    </div>
  )
}

export default Blog
