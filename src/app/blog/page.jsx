import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}
 

const Blog = async () => {
  const data =await getData()
  console.log(data)
  return (
    
    <div className={styles.mainContainer}>
      {
        data.map((item)=>{
          
          return(
            <Link key={item.id} href={`blog/${item.id}`} className={styles.container}>
            <div className={styles.imageContainer}>
            <Image
            src="https://images.pexels.com/photos/3817676/pexels-photo-3817676.jpeg?auto=compress&cs=tinysrgb&w=600"
            width={400}
            height={250}
            className={styles.image}
            alt='blog image'/> 
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.body}</p>
            </div>
          </Link>
          );
        })
      }
     
      
    </div>
  )
}

export default Blog
