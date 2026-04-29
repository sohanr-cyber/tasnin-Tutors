import React, { useEffect, useState } from 'react'
import styles from '../styles/Login.module.css'
import Logo from '@/components/Utility/Logo'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { showSnackBar } from '@/redux/notistackSlice'
import { NextSeo } from 'next-seo'
import { hireTutorSeoData, loginSeoData, tutorRegistrationSeoData } from '@/utility/const'
import { finishLoading, startLoading } from '@/redux/stateSlice'

const STORAGE_KEY = 'tutor_registration_draft'

const initialState = {
    fullName: '',
    phone: '',
    whatsapp: '',
    facebook: '',
    address: '',

    currentInstitution: '',
    department: '',
    currentYear: '',

    sscSchool: '',
    sscGroup: '',
    sscResult: '',
    sscMedium: '',

    hscCollege: '',
    hscGroup: '',
    hscResult: '',
    hscMedium: '',

    teachClass: '',
    teachSubjects: '',
    preferredMedium: '',
    tuitionType: '',
    preferredArea: '',
    expectedSalary: '',
    availableTime: '',

    experience: '',
    notes: ''
}

const Login = () => {
    const [user, setUser] = useState({})
    const [loaded, setLoaded] = useState(false)

    const router = useRouter()
    const dispatch = useDispatch()

    // Load saved draft
    useEffect(() => {
        if (typeof window === 'undefined') return

        try {
            const saved = localStorage.getItem(STORAGE_KEY)
            if (saved) {
                setUser(JSON.parse(saved))
            } else {
                setUser(initialState)
            }
        } catch (err) {
            console.log('Draft load failed', err)
            setUser(initialState)
        }

        setLoaded(true)
    }, [])

    // Auto save draft
    useEffect(() => {
        if (!loaded) return
        if (typeof window === 'undefined') return

        localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    }, [user, loaded])

    const send = async () => {
        if (!user.fullName || !user.phone || !user.currentInstitution) {
            dispatch(
                showSnackBar({
                    message: 'Please fill required fields',
                    option: {
                        variant: 'error'
                    }
                })
            )
            return
        }

        try {
            dispatch(startLoading())

            const { data } = await axios.post('/api/tutor/register', {
                ...user
            })

            if (!data.error && data.success) {
                dispatch(
                    showSnackBar({
                        message: 'Tutor Registration Submitted Successfully'
                    })
                )

                localStorage.removeItem(STORAGE_KEY)
                setUser(initialState)

                router.push('/')
            } else {
                dispatch(
                    showSnackBar({
                        message: data.message || 'Failed to submit',
                        option: {
                            variant: 'error'
                        }
                    })
                )
            }

            dispatch(finishLoading())
        } catch (error) {
            dispatch(finishLoading())

            dispatch(
                showSnackBar({
                    message: 'Something Went Wrong!',
                    option: {
                        variant: 'error'
                    }
                })
            )

            console.log(error)
        }
    }

    return (
        <>
            <NextSeo {...tutorRegistrationSeoData} />

            <div className={styles.wrapper}>
                <div className={styles.form__container}>
                    <div className={styles.logo}>
                        <Logo />
                    </div>

                    <h2>Tutor Registration</h2>

                    <p>
                        আপনার জন্য উপযুক্ত টিউশন খুঁজে পেতে নিচের ফর্মটি পূরণ করুন 📝
                    </p>

                    <form>
                        <label>আপনার পূর্ণ নাম</label>
                        <input
                            value={user.fullName || ''}
                            placeholder="পূর্ণ নাম লিখুন"
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    fullName: e.target.value
                                })
                            }
                        />

                        <label>মোবাইল নাম্বার</label>
                        <input
                            value={user.phone || ''}
                            placeholder="মোবাইল নাম্বার"
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    phone: e.target.value
                                })
                            }
                        />

                        <label>হোয়াটসঅ্যাপ নাম্বার</label>
                        <input
                            value={user.whatsapp || ''}
                            placeholder="হোয়াটসঅ্যাপ নাম্বার"
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    whatsapp: e.target.value
                                })
                            }
                        />

                        <label>ফেসবুক প্রোফাইল লিংক</label>
                        <input
                            value={user.facebook || ''}
                            placeholder="Facebook profile link"
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    facebook: e.target.value
                                })
                            }
                        />

                        <label>বর্তমানে কোথায় পড়ছেন?</label>
                        <input
                            value={user.currentInstitution || ''}
                            placeholder="DU / BUET / Medical"
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    currentInstitution: e.target.value
                                })
                            }
                        />

                        <label>বিভাগ / সাবজেক্ট</label>
                        <input
                            value={user.department || ''}
                            placeholder="CSE / English / MBBS"
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    department: e.target.value
                                })
                            }
                        />

                        <label>কোন বর্ষ / সেমিস্টার?</label>
                        <input
                            value={user.currentYear || ''}
                            placeholder="2nd Year / 4th Semester"
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    currentYear: e.target.value
                                })
                            }
                        />

                        <label>SSC স্কুল</label>
                        <input
                            value={user.sscSchool || ''}
                            placeholder="SSC school name"
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    sscSchool: e.target.value
                                })
                            }
                        />

                        <label>SSC গ্রুপ</label>
                        <input
                            value={user.sscGroup || ''}
                            placeholder="Science / Commerce / Arts"
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    sscGroup: e.target.value
                                })
                            }
                        />

                        <label>SSC রেজাল্ট</label>
                        <input
                            value={user.sscResult || ''}
                            placeholder="GPA 5.00"
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    sscResult: e.target.value
                                })
                            }
                        />

                        <label>SSC মাধ্যম / ভার্সন</label>
                        <input
                            value={user.sscMedium || ''}
                            placeholder="বাংলা / ইংলিশ ভার্সন"
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    sscMedium: e.target.value
                                })
                            }
                        />

                        <label>HSC কলেজ</label>
                        <input
                            value={user.hscCollege || ''}
                            placeholder="HSC college name"
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    hscCollege: e.target.value
                                })
                            }
                        />

                        <label>HSC গ্রুপ</label>
                        <input
                            value={user.hscGroup || ''}
                            placeholder="Science / Commerce / Arts"
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    hscGroup: e.target.value
                                })
                            }
                        />

                        <label>HSC রেজাল্ট</label>
                        <input
                            value={user.hscResult || ''}
                            placeholder="GPA 5.00"
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    hscResult: e.target.value
                                })
                            }
                        />

                        <label>HSC মাধ্যম / ভার্সন</label>
                        <input
                            value={user.hscMedium || ''}
                            placeholder="বাংলা / ইংলিশ ভার্সন"
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    hscMedium: e.target.value
                                })
                            }
                        />

                        <label>কোন কোন শ্রেণি পড়াতে পারবেন?</label>
                        <input
                            value={user.teachClass || ''}
                            placeholder="Class 6–10 / HSC"
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    teachClass: e.target.value
                                })
                            }
                        />

                        <label>কোন কোন বিষয় পড়াতে পারবেন?</label>
                        <input
                            value={user.teachSubjects || ''}
                            placeholder="Math / Physics / English"
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    teachSubjects: e.target.value
                                })
                            }
                        />

                        <label>কোন মাধ্যমে পড়াতে চান?</label>
                        <input
                            value={user.preferredMedium || ''}
                            placeholder="বাংলা / English Medium"
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    preferredMedium: e.target.value
                                })
                            }
                        />

                        <label>কোন ধরনের টিউশন চান?</label>
                        <input
                            value={user.tuitionType || ''}
                            placeholder="Home / Online / Both"
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    tuitionType: e.target.value
                                })
                            }
                        />

                        <label>কোন এলাকায় পড়াতে চান?</label>
                        <input
                            value={user.preferredArea || ''}
                            placeholder="Dhanmondi / Mirpur / Uttara"
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    preferredArea: e.target.value
                                })
                            }
                        />

                        <label>প্রত্যাশিত সম্মানী</label>
                        <input
                            value={user.expectedSalary || ''}
                            placeholder="5000+ / Negotiable"
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    expectedSalary: e.target.value
                                })
                            }
                        />

                        <label>কখন পড়াতে পারবেন?</label>
                        <input
                            value={user.availableTime || ''}
                            placeholder="Evening / Friday only"
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    availableTime: e.target.value
                                })
                            }
                        />

                        <label>পূর্ব অভিজ্ঞতা</label>
                        <input
                            value={user.experience || ''}
                            placeholder="2 years teaching experience"
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    experience: e.target.value
                                })
                            }
                        />

                        <label>বিশেষ তথ্য</label>
                        <input
                            value={user.notes || ''}
                            placeholder="বিশেষ তথ্য লিখুন"
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    notes: e.target.value
                                })
                            }
                        />

                        <div
                            className={styles.btn}
                            onClick={send}
                        >
                            Submit
                        </div>
                    </form>

                    <p className={styles.route}>
                        Already registered?
                        <Link href="/login">
                            &nbsp; Login here
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login