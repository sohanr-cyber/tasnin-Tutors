import React from "react";
import styles from "@/styles/TutorProfile.module.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LanguageIcon from '@mui/icons-material/Language';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function TutorProfile() {
    return (
        <div className={styles.wrapper}>

            {/* HEADER */}
            <div className={styles.header}>
                <div className={styles.nav}>
                </div>
            </div>

            {/* MAIN */}
            <div className={styles.container}>

                {/* LEFT */}
                <div className={styles.left}>

                    <div className={styles.profileCard}>
                        <div className={styles.avatar}></div>

                        <h2>MD. RAKIB HOSSAIN</h2>
                        <p className={styles.tagline}>শিক্ষাদানই আমার অগ্রাধিকার</p>

                        <div className={styles.contact}>
                            <div className={styles.item}>
                                <div className={styles.key}>
                                    <span style={{ color: "#2f6fed" }}><CallIcon /></span>
                                    <span>Phone</span>
                                </div>
                                01712-345678
                            </div>

                            <div className={styles.item}>
                                <div className={styles.key}>
                                    <span style={{ color: "#25D366" }}><WhatsAppIcon /></span>
                                    <span>WhatsApp</span>
                                </div>
                                01712-345678
                            </div>

                            <div className={styles.item}>
                                <div className={styles.key}>
                                    <span style={{ color: "#1877F2" }}><FacebookIcon /></span>
                                    <span>Facebook</span>
                                </div>
                                facebook.com/rakib.hossain
                            </div>

                            <div className={styles.item}>
                                <div className={styles.key}>
                                    <span style={{ color: "#E1306C" }}><LocationOnIcon /></span>
                                    <span>Location</span>
                                </div>
                                Dhanmondi, Dhaka
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <h3>🎓 বর্তমান শিক্ষাগত তথ্য</h3>
                        <div className={styles.eduGrid}>
                            <div>
                                <p>Current Institution</p>
                                <strong>University of Dhaka</strong>
                            </div>
                            <div>
                                <p>Department</p>
                                <strong>Mathematics</strong>
                            </div>
                            <div>
                                <p>Current Year</p>
                                <strong>3rd Year (Hon's)</strong>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.card} ${styles.ssc}`}>
                        <h3>SSC তথ্য</h3>
                        <p>School : Notre Dame College</p>
                        <p>Group : Science</p>
                        <p>Result : GPA 5.00</p>
                        <p>Medium : Bangla</p>
                    </div>

                    <div className={`${styles.card} ${styles.hsc}`}>
                        <h3>HSC তথ্য</h3>
                        <p>College : Notre Dame College</p>
                        <p>Group : Science</p>
                        <p>Result : GPA 5.00</p>
                        <p>Medium : Bangla</p>
                    </div>

                </div>

                {/* RIGHT */}
                <div className={styles.right}>

                    <div className={styles.card}>
                        <h3>📘 টিউশন সংক্রান্ত তথ্য</h3>
                        <ul className={styles.list}>

                            <li className={styles.item}>
                                <div className={styles.key}>
                                    <span style={{ color: "#3b67ad" }}><SchoolIcon /></span>
                                    <span>Teach Class</span>
                                </div>
                                6 to 10
                            </li>

                            <li className={styles.item}>
                                <div className={styles.key}>
                                    <span style={{ color: "#ff9800" }}><MenuBookIcon /></span>
                                    <span>Subjects</span>
                                </div>
                                Math, Physics, Chemistry
                            </li>

                            <li className={styles.item}>
                                <div className={styles.key}>
                                    <span style={{ color: "#9c27b0" }}><LanguageIcon /></span>
                                    <span>Medium</span>
                                </div>
                                Bangla
                            </li>

                            <li className={styles.item}>
                                <div className={styles.key}>
                                    <span style={{ color: "#4caf50" }}><HomeIcon /></span>
                                    <span>Tuition Type</span>
                                </div>
                                Home
                            </li>

                            <li className={styles.item}>
                                <div className={styles.key}>
                                    <span style={{ color: "#e91e63" }}><LocationOnIcon /></span>
                                    <span>Area</span>
                                </div>
                                Dhanmondi, Mirpur
                            </li>

                            <li className={styles.item}>
                                <div className={styles.key}>
                                    <span style={{ color: "#ff5722" }}><AttachMoneyIcon /></span>
                                    <span>Salary</span>
                                </div>
                                8,000 - 10,000 BDT
                            </li>

                            <li className={styles.item}>
                                <div className={styles.key}>
                                    <span style={{ color: "#2196f3" }}><AccessTimeIcon /></span>
                                    <span>Time</span>
                                </div>
                                Evening
                            </li>

                        </ul>
                    </div>

                    <div className={`${styles.card} ${styles.exp}`}>
                        <h3>অভিজ্ঞতা</h3>
                        <p>২ বছর টিউশনি করার অভিজ্ঞতা রয়েছে।</p>
                    </div>

                    <div className={`${styles.card} ${styles.notes}`}>
                        <h3>অতিরিক্ত তথ্য</h3>
                        <p>শিক্ষার্থীদের সাথে বন্ধুত্বপূর্ণ সম্পর্ক রেখে সহজভাবে পড়াই।</p>
                    </div>

                </div>
            </div>

            <div className={styles.footer}>
                ❤️ আপনার সন্তানের উজ্জ্বল ভবিষ্যতের জন্য আমরা আছি আপনার পাশে ❤️
            </div>
        </div>
    );
}