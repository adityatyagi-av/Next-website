import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
        <Image
        src="https://images.pexels.com/photos/3817676/pexels-photo-3817676.jpeg?auto=compress&cs=tinysrgb&w=600"
        width={400}
        height={250}
        className={styles.image}
        alt='blog image'/> 
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, minus! Fugit dolorem dicta ad pariatur quos nemo soluta reprehenderit, fuga accusamus saepe inventore vel delectus odit, dolor sit eligendi nobis esse atque. Nemo consequuntur ab cumque ipsam. Assumenda, fuga! Aspernatur tempore excepturi illum commodi culpa rerum blanditiis est recusandae, architecto odio deserunt? Dicta, atque tempore qui repellendus ea minus architecto magni culpa? Earum autem adipisci ducimus, amet debitis mollitia voluptates blanditiis ab quo facere deserunt asperiores voluptatem aspernatur commodi magni suscipit velit accusantium doloremque consequuntur est in neque! Suscipit amet facilis, harum non ipsa autem quisquam vel quas minus aut.</p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
        <Image
        src="https://images.pexels.com/photos/3817676/pexels-photo-3817676.jpeg?auto=compress&cs=tinysrgb&w=600"
        width={400}
        height={250}
        className={styles.image}
        alt='blog image'/> 
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
        <Image
        src="https://images.pexels.com/photos/3817676/pexels-photo-3817676.jpeg?auto=compress&cs=tinysrgb&w=600"
        width={400}
        height={250}
        className={styles.image}
        alt='blog image'/> 
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
        <Image
        src="https://images.pexels.com/photos/3817676/pexels-photo-3817676.jpeg?auto=compress&cs=tinysrgb&w=600"
        width={400}
        height={250}
        className={styles.image}
        alt='blog image'/> 
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
        </div>
      </Link>
    </div>
  )
}

export default Blog
