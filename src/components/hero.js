import React from 'react'
import styles from './hero.module.scss'
import heroImage from '../assets/cannabis-banner.jpg'

export default () => (
  <div className={styles.hero}>
    <div className={styles.heroWrapper}>
      <img
        className={styles.heroImage}
        src={heroImage}
        alt="Hero"
      />
      <span className={styles.greenCross1}></span>
    </div>
    <div className={styles.heroDetails}>
      <h3 className={styles.heroHeader}>Weed Wāhine</h3>
      <p className={styles.heroSubheader}> Cannabis education from Aotearoa </p>
    </div>
  </div>
)
