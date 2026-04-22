import React from 'react'
import styles from '@/styles/Offer/Features.module.css'
import Image from 'next/image';
const features = [
  {
    title: "1000+",
    description: "Active Tutors",
    icon: "https://cdn-icons-png.flaticon.com/128/10484/10484468.png"
  },
  {
    title: "500+",
    description: "Student Helped",
    icon: "https://cdn-icons-png.flaticon.com/128/3214/3214721.png"
  },
  {
    title: "24h",
    description: "Fast Response",
    icon: "https://cdn-icons-png.flaticon.com/128/3133/3133110.png"
  },
  
  // {
  //   title: "100% Original",
  //   description: "100% Money Back",
  //   icon: "https://cdn-icons-png.flaticon.com/128/5579/5579172.png"
  // }
];


const Features = () => {
  return (
    <div className={styles.wrapper} >
      {features.map((f, index) => (
        <div className={styles.feature}>
          <div className={styles.icon}>
            <Image src={f.icon} width={40} height={40} alt="" />
          </div>
          <div className={styles.text}>
            <b>{f.title}</b>
            <div>
              {f.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Features