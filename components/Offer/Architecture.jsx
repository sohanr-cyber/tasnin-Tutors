import React from 'react'
import styles from '../../styles/Offer/Architecture.module.css'
import Image from 'next/image';
const data = [
  {
    t: "Tell Us Your Tutor Requirement",
    d: "Share Class , Subject , Contact , Location Details",
    c: "#3b67ad",
    i: "https://cdn-icons-png.flaticon.com/128/10279/10279604.png"
  },
  {
    t: "Get Matched with Best Tutors",
    d: "Find Verified Tutors suited to your needs",
    c: "yellowgreen",
    i: "https://cdn-icons-png.flaticon.com/128/4428/4428556.png"
  },
  {
    t: "Take a Demo Class Session",
    d: "Assess teaching style and compatiblity",
    c: "teal",
    i: "https://cdn-icons-png.flaticon.com/128/5580/5580079.png"
  },
  {
    t: "Confirm Tutor & Start Learning",
    d: "Secure Tution and start regular sessions",
    c: "green",
    i: "https://cdn-icons-png.flaticon.com/128/5978/5978521.png"
  }
];
const Architecture = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.steps}>
        {data.map((e, i) => (
          <div className={styles.step} style={{
            marginRight: `-${i * 50}px`
          }}>
            <div className={styles.number} style={{ backgroundColor: `${e.c}`, color: "white" }}>
              {i + 1}
            </div>
            <div className={styles.text}>
              <div className={styles.title}>
                {e.t}
              </div>
              <div className={styles.description}>
                {e.d}
              </div> </div>
            <div className={styles.icon}>
              <Image src={e.i} width={60} height={60} alt="" />
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Architecture
