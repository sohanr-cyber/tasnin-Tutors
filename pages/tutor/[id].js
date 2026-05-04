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
import ScienceIcon from '@mui/icons-material/Science';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import BadgeIcon from '@mui/icons-material/Badge';
import axios from "axios";
import BASE_URL from "@/config";

export default function TutorProfile({ tutor }) {
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

                        <h2>{tutor.fullName}</h2>
                        <p className={styles.tagline}>{tutor.tagline}</p>
                        <div className={styles.contact}>
                            <div className={styles.item}>
                                <div className={styles.key}>
                                    <span style={{ color: "#2f6fed" }}><CallIcon /></span>
                                    <span>Phone</span>
                                </div>
                                {tutor.phone}
                            </div>

                            <div className={styles.item}>
                                <div className={styles.key}>
                                    <span style={{ color: "#25D366" }}><WhatsAppIcon /></span>
                                    <span>WhatsApp</span>
                                </div>
                                {tutor.whatsapp}
                            </div>

                            <div className={styles.item}>
                                <div className={styles.key}>
                                    <span style={{ color: "#1877F2" }}><FacebookIcon /></span>
                                    <span>Facebook</span>
                                </div>
                                {tutor.facebook}
                            </div>

                            <div className={styles.item}>
                                <div className={styles.key}>
                                    <span style={{ color: "#E1306C" }}><LocationOnIcon /></span>
                                    <span>Location</span>
                                </div>
                                {tutor.location?.area}, {tutor.location?.city}
                            </div>
                        </div>
                    </div>

                    {/* CURRENT EDUCATION */}
                    <div className={styles.card}>
                        <h3 style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(59, 103, 173, 0.12)" }}>
                            <SchoolIcon style={{ fontSize: 26, color: "#3b67ad" }} />
                            বর্তমান শিক্ষাগত তথ্য
                        </h3>

                        <div className={styles.eduGrid}>

                            <div className={styles.item}>
                                <div className={styles.key}>
                                    <span style={{ color: "#3b67ad" }}>
                                        <SchoolIcon style={{ fontSize: 35 }} />
                                    </span>
                                </div>
                                <div className={styles.val}>
                                    <span style={{ color: "#3b67ad", fontWeight: 500 }}>
                                        Current Institution
                                    </span>
                                    <strong>{tutor.currentInstitution}</strong>
                                </div>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.key}>
                                    <span style={{ color: "#ff9800" }}>
                                        <AccountBalanceIcon style={{ fontSize: 35 }} />
                                    </span>
                                </div>
                                <div className={styles.val}>
                                    <span style={{ color: "#ff9800", fontWeight: 500 }}>
                                        Department
                                    </span>
                                    <strong>{tutor.department}</strong>
                                </div>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.key}>
                                    <span style={{ color: "#4caf50" }}>
                                        <CalendarTodayIcon style={{ fontSize: 35 }} />
                                    </span>
                                </div>
                                <div className={styles.val}>
                                    <span style={{ color: "#4caf50", fontWeight: 500 }}>
                                        Current Year / Semister
                                    </span>
                                    <strong>{tutor.currentYear}</strong>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* SSC */}
                    <div className={`${styles.card} ${styles.ssc}`}>
                        <h3 style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(76, 175, 80, 0.12)" }}>
                            <MenuBookIcon style={{ fontSize: 26, color: "#4caf50" }} />
                            SSC তথ্য
                        </h3>

                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <div className={styles.key}><span><SchoolIcon /></span><span>School</span></div>
                                {tutor.sscSchool}
                            </li>

                            <li className={styles.item}>
                                <div className={styles.key}><span><ScienceIcon /></span><span>Group</span></div>
                                {tutor.sscGroup}
                            </li>

                            <li className={styles.item}>
                                <div className={styles.key}><span><EmojiEventsIcon /></span><span>Result</span></div>
                                {tutor.sscResult}
                            </li>

                            <li className={styles.item}>
                                <div className={styles.key}><span><LanguageIcon /></span><span>Medium</span></div>
                                {tutor.sscMedium}
                            </li>
                        </ul>
                    </div>

                    {/* HSC */}
                    <div className={`${styles.card} ${styles.hsc}`}>
                        <h3 style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(59, 103, 173, 0.12)" }}>
                            <SchoolIcon style={{ fontSize: 26, color: "#3b67ad" }} />
                            HSC তথ্য
                        </h3>

                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <div className={styles.key}><span><SchoolIcon /></span><span>College</span></div>
                                {tutor.hscCollege}
                            </li>

                            <li className={styles.item}>
                                <div className={styles.key}><span><ScienceIcon /></span><span>Group</span></div>
                                {tutor.hscGroup}
                            </li>

                            <li className={styles.item}>
                                <div className={styles.key}><span><EmojiEventsIcon /></span><span>Result</span></div>
                                {tutor.hscResult}
                            </li>

                            <li className={styles.item}>
                                <div className={styles.key}><span><LanguageIcon /></span><span>Medium</span></div>
                                {tutor.hscMedium}
                            </li>
                        </ul>
                    </div>

                </div>

                {/* RIGHT */}
                <div className={styles.right}>

                    {/* TUITION INFO */}
                    <div className={styles.card}>
                        <h3 style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(59, 103, 173, 0.12)", }}>
                            <MenuBookIcon style={{ fontSize: 26, color: "#3b67ad" }} />
                            টিউশন সংক্রান্ত তথ্য
                        </h3>

                        <ul className={styles.list}>

                            <li className={styles.item}>
                                <div className={styles.key}>
                                    <span style={{ color: "#3b67ad" }}><SchoolIcon /></span>
                                    <span>Teach Class</span>
                                </div>
                                {tutor.teachClass}
                            </li>

                            <li className={styles.item}>
                                <div className={styles.key}>
                                    <span style={{ color: "#ff9800" }}><MenuBookIcon /></span>
                                    <span>Subjects</span>
                                </div>
                                {tutor.teachSubjects}
                            </li>

                            <li className={styles.item}>
                                <div className={styles.key}>
                                    <span style={{ color: "#9c27b0" }}><LanguageIcon /></span>
                                    <span>Medium</span>
                                </div>
                                {tutor.preferredMedium}
                            </li>

                            <li className={styles.item}>
                                <div className={styles.key}>
                                    <span style={{ color: "#4caf50" }}><HomeIcon /></span>
                                    <span>Tuition Type</span>
                                </div>
                                {tutor.preferredMedium}
                            </li>

                            <li className={styles.item}>
                                <div className={styles.key}>
                                    <span style={{ color: "#e91e63" }}><LocationOnIcon /></span>
                                    <span>Area</span>
                                </div>
                                {tutor.area}
                            </li>

                            <li className={styles.item}>
                                <div className={styles.key}>
                                    <span style={{ color: "#ff5722" }}><AttachMoneyIcon /></span>
                                    <span>Salary</span>
                                </div>
                                {tutor.expectedSalary}
                            </li>

                            <li className={styles.item}>
                                <div className={styles.key}>
                                    <span style={{ color: "#2196f3" }}><AccessTimeIcon /></span>
                                    <span>Time</span>
                                </div>
                                {tutor.availableTime}
                            </li>

                        </ul>
                    </div>

                    {/* ID CARD */}
                    <div className={styles.card}>
                        <h3 style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(0, 150, 136, 0.12)" }}>
                            <BadgeIcon style={{ fontSize: 26, color: "#009688" }} />
                            স্টুডেন্ট আইডি কার্ড
                        </h3>

                        <div className={styles.idCardWrapper}>
                            <img src={tutor.studentId} className={styles.idCardImg} />
                        </div>
                    </div>

                    {/* EXPERIENCE */}
                    <div className={`${styles.card} ${styles.exp}`}>
                        <h3 style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(255, 152, 0, 0.12)" }}>
                            <WorkIcon style={{ fontSize: 26, color: "#ff9800" }} />
                            অভিজ্ঞতা
                        </h3>
                        <p>{tutor.experience}</p>
                    </div>

                    {/* EXTRA INFO */}
                    <div className={`${styles.card} ${styles.notes}`}>
                        <h3 style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(156, 39, 176, 0.12)" }}>
                            <InfoIcon style={{ fontSize: 26, color: "#9c27b0" }} />
                            অতিরিক্ত তথ্য
                        </h3>
                        <p>{tutor.extraInfo}</p>
                    </div>

                </div>
            </div>

        </div>
    );
}

export async function getServerSideProps(context) {
    const { id } = context.params;

    try {
        const { data } = await axios(`${BASE_URL}/api/tutor/${id}`);
        console.log(data)

        if (!data.success) {
            return { notFound: true };
        }

        return {
            props: {
                tutor: data.data,
            },
        };

    } catch (error) {
        return { notFound: true };
    }
}