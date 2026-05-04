import React from "react";
import styles from "@/styles/TutionDetails.module.css";

import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InfoIcon from "@mui/icons-material/Info";

export default function TuitionPostPage() {
    const data = {
        code: "TR-2025-0587",
        status: "Pending",

        guardianName: "Md. Kamrul Hasan",

        studentName: "Tahmid Hasan",
        studentClass: "Class 8",
        medium: "Bangla Medium",

        subjects: "Math, Physics, Chemistry",
        tutorPreference: "Male",
        tutorBackground: "DU / BUET",
        tuitionType: "Home Tuition",
        schedule: "3 Days per week (Evening)",
        budget: "8,000 - 10,000 BDT",

        address: "Dhanmondi 27, Dhaka",

        phone: "01712-345678",
        whatsapp: "01712-345678",
        facebook: "facebook.com/kamrul.hasan",

        notes: "Student is weak in Math. Need a tutor who can explain basics and take regular tests."
    };

    return (
        <div className={styles.wrapper}>

            {/* HEADER */}
            <div className={styles.card}>
                <h2 style={{ color: "#3b2a8f" }}>
                    Tuition Post
                </h2>
                <p>Guardian Requirement Details</p>

                <div style={{ marginTop: 10 }}>
                    <strong>Code:</strong> {data.code} | <strong>Status:</strong> {data.status}
                </div>
            </div>

            {/* GRID */}
            <div className={styles.container}>

                {/* LEFT */}
                <div className={styles.left}>

                    {/* GUARDIAN */}
                    <div className={styles.card}>
                        <h3 style={{ background: "rgba(59,42,143,0.12)" }}>
                            <PersonIcon style={{ color: "#3b2a8f" }} />
                            Guardian Information
                        </h3>
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

                    {/* STUDENT */}
                    {/* STUDENT */}
                    <div className={styles.card}>
                        <h3 style={{ background: "rgba(76,175,80,0.12)", display: "flex", alignItems: "center", gap: "10px" }}>
                            <SchoolIcon style={{ color: "#4caf50", fontSize: 26 }} />
                            Student Information
                        </h3>

                        <div className={styles.item}>
                            <div className={styles.key}>
                                <span style={{ color: "#3b67ad" }}><PersonIcon /></span>
                                <span>Name</span>
                            </div>
                            <strong>Tahmid Hasan</strong>
                        </div>

                        <div className={styles.item}>
                            <div className={styles.key}>
                                <span style={{ color: "#ff9800" }}><SchoolIcon /></span>
                                <span>Class</span>
                            </div>
                            <strong>Class 8</strong>
                        </div>

                        <div className={styles.item}>
                            <div className={styles.key}>
                                <span style={{ color: "#9c27b0" }}><MenuBookIcon /></span>
                                <span>Medium</span>
                            </div>
                            <strong>Bangla Medium</strong>
                        </div>
                    </div>

                </div>

                {/* RIGHT */}
                <div className={styles.right}>

                    {/* REQUIREMENTS */}
                    <div className={styles.card}>
                        <h3 style={{ background: "rgba(59,42,143,0.12)", display: "flex", alignItems: "center", gap: "10px" }}>
                            <MenuBookIcon style={{ color: "#3b2a8f", fontSize: 26 }} />
                            Tuition Requirements
                        </h3>

                        <div className={styles.item}>
                            <div className={styles.key}>
                                <span style={{ color: "#ff9800" }}>
                                    <MenuBookIcon />
                                </span>
                                <span>Subjects</span>
                            </div>
                            <strong>{data.subjects}</strong>
                        </div>

                        <div className={styles.item}>
                            <div className={styles.key}>
                                <span style={{ color: "#3b67ad" }}>
                                    <PersonIcon />
                                </span>
                                <span>Tutor Preference</span>
                            </div>
                            <strong>{data.tutorPreference}</strong>
                        </div>

                        <div className={styles.item}>
                            <div className={styles.key}>
                                <span style={{ color: "#9c27b0" }}>
                                    <SchoolIcon />
                                </span>
                                <span>Background</span>
                            </div>
                            <strong>{data.tutorBackground}</strong>
                        </div>

                        <div className={styles.item}>
                            <div className={styles.key}>
                                <span style={{ color: "#4caf50" }}>
                                    <HomeIcon />
                                </span>
                                <span>Tuition Type</span>
                            </div>
                            <strong>{data.tuitionType}</strong>
                        </div>

                        <div className={styles.item}>
                            <div className={styles.key}>
                                <span style={{ color: "#2196f3" }}>
                                    <AccessTimeIcon />
                                </span>
                                <span>Schedule</span>
                            </div>
                            <strong>{data.schedule}</strong>
                        </div>

                        <div className={styles.item}>
                            <div className={styles.key}>
                                <span style={{ color: "#ff5722" }}>
                                    <AttachMoneyIcon />
                                </span>
                                <span>Budget</span>
                            </div>
                            <strong>{data.budget}</strong>
                        </div>
                    </div>

                    {/* LOCATION */}
                    <div className={styles.card}>
                        <h3 style={{ background: "rgba(233,30,99,0.12)" }}>
                            <LocationOnIcon style={{ color: "#e91e63" }} />
                            Location
                        </h3>

                        <strong>{data.address}</strong>
                    </div>

                    {/* NOTES */}
                    <div className={styles.card}>
                        <h3 style={{ background: "rgba(156,39,176,0.12)" }}>
                            <InfoIcon style={{ color: "#9c27b0" }} />
                            Notes
                        </h3>

                        <p>{data.notes}</p>
                    </div>

                </div>
            </div>
        </div >
    );
}