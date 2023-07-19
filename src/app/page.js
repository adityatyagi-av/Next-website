import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/Button/Button'
export default function Home() {
  return (
  <div className={styles.container}>
  <div className={styles.item}>
    <h1 className={styles.title}>Attractive and Quality Designs</h1>
    <p className={styles.desc}>Turning your ideas into Reality. We bring together the teams from the global tech industry.</p>
    {/* <button className={styles.button}>See our Works</button> */}
    <Button url="portfolio" text="See our Work"/>
  </div>
  <div className={styles.item}>
  <Image src={Hero} alt='hero section image' className={styles.img} />
  </div>
  </div>
  )
}
