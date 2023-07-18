
import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  console.log("hello buddy how are you")
  return (
    <div className={styles.container}>
      <div>
      @2023 Aditya All rights reserved.
      </div>
      <div className={styles.social}>
        <Image src="/image1.jpeg" alt='facebook' width={15} height={15} className={styles.icon}/>
        <Image src="/image2.jpeg" alt='facebook' width={15} height={15} className={styles.icon}/>
        <Image src="/image3.png" alt='facebook' width={15} height={15} className={styles.icon}/>
        <Image src="/image4.png" alt='facebook' width={15} height={15} className={styles.icon}/>
      </div>
    </div>
  )
}

export default Footer
