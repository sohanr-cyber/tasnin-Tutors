import React, { useEffect, useState } from 'react'
import styles from '../../styles/Offer/Why.module.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Logo from '../Utility/Logo';

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
    const [screenSize, setScreenSize] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        };

        // Initial screen size set
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div className={styles.wraper} style={screenSize > 570 ? {
            backgroundImage: "url('https://res.cloudinary.com/dicwszs3e/image/upload/v1776752648/division/rwzrhbc2aqvvdawp3z0t.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        } : {
            // backgroundImage: "url('https://res.cloudinary.com/dicwszs3e/image/upload/v1777351283/division/woknslog2f8fho4ha0al.png')",
            backgroundImage: "url('https://res.cloudinary.com/dicwszs3e/image/upload/v1777350646/division/cwawglgdkejfcugrdj0p.png')",

            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: "80vh",

        }}>
            <div className={styles.left}>
                {/* Left side space for the student/tutor background image focus */}
            </div>

            <div className={styles.right} style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}>
                <h2 className={styles.title}>
                    <Logo />

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