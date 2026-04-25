import React from 'react'
import styles from '../../styles/Offer/Why.module.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const data = [
    {
        c: "#D4AF37", // Professional Gold
        t: "Verified & Trusted Tutors",
        // Soft gradient from gold to a clean transparent white
        b: "linear-gradient(135deg, rgba(252, 225, 185, 0.6) 0%, rgba(240, 248, 255, 0.9) 60%)"
    },
    {
        c: "#00CED1", // Darker Aqua for readability
        t: "Tutor For All Classes (1 - HSC, Admission)",
        b: "linear-gradient(135deg, rgba(186, 247, 255, 0.6) 0%, rgba(240, 248, 255, 0.9) 60%)"
    },
    {
        c: "#2E7D32", // Academic Green
        t: "Both Bangla and English Medium",
        b: "linear-gradient(135deg, rgba(134, 255, 170, 0.4) 0%, rgba(240, 248, 255, 0.9) 60%)"
    },
    {
        c: "#8E44AD", // Deep Purple
        t: "Home Tutoring and Online Tutoring",
        b: "linear-gradient(135deg, rgba(213, 170, 248, 0.5) 0%, rgba(240, 248, 255, 0.9) 60%)"
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
                {/* Left side space for the student/tutor background image focus */}
            </div>
            
            <div className={styles.right}>
                <h2 className={styles.title}>
                    Why Choose <span className={styles.brandColor}>Tasnim Tutors?</span>
                </h2>

                <div className={styles.reason}>
                    {data.map((item, index) => (
                        <div 
                            key={index} 
                            className={styles.item} 
                            style={{ 
                                background: item.b,
                                borderLeft: `5px solid ${item.c}` // Adds a professional accent line
                            }}
                        >
                            <div className={styles.iconContainer}>
                                <CheckCircleIcon style={{ fontSize: "2.5rem", color: item.c }} />
                            </div>
                            <div className={styles.text}>
                                {item.t}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Why