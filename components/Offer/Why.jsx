import React from 'react'
import styles from '../../styles/Offer/Why.module.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const data = [
    {
        c: "gold",
        t: "Verified & Trusted Tutors"
    },
    {
        c: "aqua",
        t: "Tutor For All Classes (1 - HSC , Admission)"
    },
    {
        c: "green",
        t: "Both Bangla and English Medim"
    },
    {
        c: "purple",
        t: "Home Tutoring and Online Tutoring"
    }
]
const Why = () => {
    return (
        <div className={styles.wraper} style={{
            backgroundImage: "url('https://res.cloudinary.com/dicwszs3e/image/upload/v1776752648/division/rwzrhbc2aqvvdawp3z0t.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className={styles.left}>

            </div>
            <div className={styles.right}>
                <b className={styles.title}>Why Choses <span className={styles.icon}>Tasnim Tutors ?</span>

                </b>
                <div className={styles.reason}>
                    {data.map((e, i) => (
                        <> <div className={styles.item}>
                            <div className={styles.icon}>
                                <CheckCircleIcon style={{ fontSize: "250%", color: `${e.c}` }} />
                            </div>
                            <div className={styles.text}>
                                {e.t}
                            </div>
                        </div></>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Why
