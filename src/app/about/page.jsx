import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const About = () => {
  return (
    <div  className={styles.container}>
      <div className={styles.imgContainer}>
      <Image src="https://images.pexels.com/photos/17494608/pexels-photo-17494608/free-photo-of-police-station.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" fill={true} alt='about image'
      className={styles.img}/>
      <div className={styles.imgText}>
        <h1 className={styles.imgTitle}>Physics Student</h1>
        <h2 className={styles.imgDesc}>
          Best model representation
        </h2>
      </div>
      </div>
      
    <div className={styles.textContainer}>
      <div className={styles.item}>
        <h1 className={styles.title}>Who are We?</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sapiente nam impedit iusto aut ipsa quis architecto modi nostrum quia doloribus, illo eaque, repellat nemo praesentium eveniet  consequatur. <br />
        <br />Dolor hic placeat quia? Mollitia assumenda praesentium fuga incidunt voluptatibus consequuntur adipisci voluptate  quas temporibus adipisci eos ducimus dolor assumenda animi libero, quia, aliquid deleniti ut eum!</p>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>What We do?</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sapiente nam impedit iusto aut ipsa quis architecto  
        <br />
        <br />
        - Dynamic Webistes 
        <br />
        <br />
        - Fast and Handy 
        <br />
        <br />
        -Applications</p>
        <Button url="/contact" text="contact"/>
      </div>
    </div>
    </div>
  )
}

export default About
