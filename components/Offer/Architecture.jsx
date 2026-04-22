import React from 'react'
import styles from '../../styles/Offer/Architecture.module.css'
import Image from 'next/image';
const data = [
  {
    t: "Tell Us Your Tutor Requirement",
    d: "Share your class, subject, preferred location, preferred tutor type, and learning needs so we can understand your exact requirement.",
    c: "#3b67ad",
    i: "https://cdn-icons-png.flaticon.com/128/10279/10279604.png"
  },
  {
    t: "Get Matched with Best Tutors",
    d: "We connect you with qualified and trusted tutors based on your requirements and help you find the best available options.",
    c: "yellowgreen",
    i: "https://cdn-icons-png.flaticon.com/128/4428/4428556.png"
  },
  {
    t: "Take a Demo Class Session",
    d: "Attend a demo class with your selected tutor to evaluate teaching style, communication, and overall suitability before making a final decision.",
    c: "teal",
    i: "https://cdn-icons-png.flaticon.com/128/5580/5580079.png"
  },
  {
    t: "Confirm Tutor & Start Learning",
    d: "Choose the best tutor with confidence, confirm the tuition, and begin your learning journey with the right guidance.",
    c: "green",
    i: "https://cdn-icons-png.flaticon.com/128/5978/5978521.png"
  }
];
const Architecture = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.steps}>
        {data.map((e, i) => (
          <div className={styles.step}>
            <div className={styles.number} style={{ backgroundColor: `${e.c}`, color: "white" }}>
              {i + 1}
            </div>
            <div className={styles.title}>
              {e.t}
            </div>
            {/* <div className={styles.description}>
              {e.d}
            </div> */}
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
