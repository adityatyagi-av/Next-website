import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Id = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, excepturi!</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae dolor culpa iure reiciendis dolore odit blanditiis laboriosam voluptatum aut quos ipsum pariatur saepe praesentium nesciunt, dolorum, minus eius eaque nobis, assumenda dolores laudantium vitae. Tempore ratione error fugit maiores blanditiis.
          </p>
          <div className={styles.author}>
            <Image src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=600" alt="author image"
            width={40}
            height={40}
            className={styles.avatar}
            />
            <span className={styles.usernamae}>Aditya Tyagi</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="https://images.pexels.com/photos/1478685/pexels-photo-1478685.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=''
          fill={true}
          className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa asperiores optio deserunt quia dolorum earum sunt reprehenderit! Hic excepturi beatae nisi. Quaerat dignissimos at id repellat ab placeat,
        <br />
        <br />
         vitae corporis veniam, similique mollitia ullam. Ducimus modi natus assumenda animi ratione officia quo. Iste, nemo amet nam illo eius, facere minima quibusdam dolore neque inventore facilis odit odio veniam magnam quasi quod? Perferendis totam dolore nihil consequuntur illo impedit esse doloribus dolor officia error corporis mollitia sunt, quibusdam laboriosam. Commodi magnam perferendis doloremque, molestias neque quis adipisci nostrum, exercitationem odit unde, fugit quae. Odit dolorem voluptas doloremque hic nostrum quasi magni sint sequi officia soluta porro laudantium quaerat, expedita commodi officiis accusantium dolores earum consequunturbr
         <br />
         <br />
          eum voluptatem cupiditate et! Nulla cum nemo odio, ipsum est repellendus doloribus, debitis consequatur voluptatem corrupti veniam inventore deserunt porro beatae vel tempora blanditiis! Molestiae aut praesentium, quibusdam similique et odit. Totam esse reiciendis ipsa placeat.</p>
      </div>
    </div>
  )
}

export default Id
